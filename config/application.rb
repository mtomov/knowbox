require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Knowbox
  class Application < Rails::Application
    config.generators do |g|
      g.assets false
      g.template_engine :slim
      g.stylesheets false
      g.helper false
      g.jbuilder false
    end
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.session_store :active_record_store, same_site: :none
    # httponly: false

    config.x.host_name = "https://quiet-hamlet-76527.herokuapp.com"

    # config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]
    config.action_cable.allowed_request_origins = ["http://localhost:3000", "http://localhost:9000", "knowbox.com", /chrome-extension:\/\/.*/, /moz-extension:\/\/.*/, config.x.host_name]

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.hosts << "quiet-hamlet-76527.herokuapp.com"
  end
end
