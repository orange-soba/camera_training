Rails.application.routes.draw do
  root "cameras#index"
  resources :cameras, only: [:index, :new, :create]
end
