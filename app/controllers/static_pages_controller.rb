class StaticPagesController < ApplicationController
  def root
  end

  def favorites
  end

  def search
    respond_to do |format|
      begin
        @gem = Gems.info params[:search]
        rescue JSON::ParserError
        format.js { render action: 'gemnotfound' }
      end
      format.html { redirect_to :back }
      format.js
    end
  end
end
