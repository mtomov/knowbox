Rails.application.routes.draw do
  root to: "extension/popup#show"

  get "/scripts/popup" => "popup_script#show"

  resources :snippets
end
