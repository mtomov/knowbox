class PopupScriptController < ExtensionController
  def show
    path = ActionController::Base.helpers.asset_pack_path "application.js", host: Rails.application.config.x.host_name

    render inline: path
  end
end
