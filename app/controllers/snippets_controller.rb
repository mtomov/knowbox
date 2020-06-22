class SnippetsController < ExtensionController
  before_action :set_snippet, only: [:show, :edit, :update, :destroy]

  # GET /snippets
  # GET /snippets.json
  def index
    @term ||= nil
    @snippets ||= Snippet.order(id: :desc).all
  end

  # GET /snippets/1
  # GET /snippets/1.json
  def show
  end

  # GET /snippets/new
  def new
    @snippet = Snippet.new
  end

  # GET /snippets/1/edit
  def edit
  end

  # POST /snippets
  # POST /snippets.json
  def create
    @snippet = Snippet.new(snippet_params)
    @snippet.author = current_user
    if @snippet.save
      redirect_to @snippet, notice: "Snippet was successfully created."
    else
      render :new
    end
  end

  # PATCH/PUT /snippets/1
  # PATCH/PUT /snippets/1.json
  def update
    if @snippet.update(snippet_params)
      redirect_to @snippet, notice: "Snippet was successfully updated."
    else
      render :edit
    end
  end

  # DELETE /snippets/1
  # DELETE /snippets/1.json
  def destroy
    @snippet.destroy
    respond_to do |format|
      format.html { redirect_to snippets_url, notice: "Snippet was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_snippet
    @snippet = Snippet.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def snippet_params
    params.require(:snippet).permit(:text, :source)
  end
end
