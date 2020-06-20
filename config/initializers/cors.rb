# Be sure to restart your server when you modify this file.

Rails.application.config.middleware.insert_before 0, Rack::Cors, debug: true, logger: proc { Rails.logger } do
  allow do
    origins "http://localhost:9000"
    resource "*", headers: :any, methods: :any, credentials: true
  end
end
