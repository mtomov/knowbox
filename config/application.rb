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

    config.x.host_name = "https://knowbox.klutch.ai"

    # config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]
    config.action_cable.allowed_request_origins = ["http://localhost:3000", "http://localhost:9000", "knowbox.com", /chrome-extension:\/\/.*/]

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.hosts << "knowbox.com"
  end
end
