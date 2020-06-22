# frozen_string_literal: true

class SnippetsReflex < ApplicationReflex
  # Add Reflex methods in this file.
  #
  # All Reflex instances expose the following properties:
  #
  #   - connection - the ActionCable connection
  #   - channel - the ActionCable channel
  #   - request - an ActionDispatch::Request proxy for the socket connection
  #   - session - the ActionDispatch::Session store for the current visitor
  #   - url - the URL of the page that triggered the reflex
  #   - element - a Hash like object that represents the HTML element that triggered the reflex
  #   - params - parameters from the element's closest form (if any)
  #
  # Example:
  #

  def search(term = "")
    @term = term
    @url = "/snippets"
    @snippets = term.present? ? Snippet.search(term).with_pg_search_highlight : Snippet.all
  end

  def add(text = "")
    @url = "/snippets"
    if text.present?
      Snippet.create!(text: text, author: connection.current_user)
    end
  end
end
