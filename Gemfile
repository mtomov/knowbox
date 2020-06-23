source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.5"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 6.0.3", ">= 6.0.3.2"
# Use postgresql as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem "puma", "~> 4.1"
# Use SCSS for stylesheets
gem "sass-rails", ">= 6"
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem "webpacker", "~> 4.0"
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem "turbolinks", "~> 5"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.7"
# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.2", require: false
gem "stimulus_reflex", "~> 3.2"

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem "web-console", ">= 3.3.0"
  gem "listen", "~> 3.2"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "spring-commands-rspec"
  gem "hirb"
  gem "capistrano", require: false
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  # Easy installation and use of web drivers to run system tests with browsers
  gem "webdrivers"
  gem "launchy"
end

gem "sorcery"
gem "oauth2"
gem "slim"
gem "slim-rails"
gem "sentry-raven"
gem "delayed_job_active_record"
gem "foreman"
gem "batch-loader"
gem "rack-cors"

group :development, :test do
  gem "ruby-debug-ide"
  gem "debase"
  gem "rspec-rails"
  gem "standard"
  gem "awesome_print"
  gem "log_buddy"
  gem "factory_bot_rails"
  gem "byebug"
end

group :production, :staging do
  gem "appengine"
  gem "stackdriver"
end

gem "cable_ready", "~> 4.2"

gem "rails_same_site_cookie", "~> 0.1.8"

gem "activerecord-session_store", "~> 1.1"

gem 'pg_search'
