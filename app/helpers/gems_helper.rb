module GemsHelper
  def has_dependencies?(gem)
    gem['dependencies']['development'].empty?
  end
end
