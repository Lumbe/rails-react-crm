class Api::V1::ContactsController < Api::V1::ApplicationController
  before_action :load_contact, only: [:show, :update]

  def index
    # contacts = Contact.all.order(created_at: :desc).page(params[:page] || 1)
    contacts = Contact.where(department: current_user.departments).order(created_at: :desc).page(params[:page] || 1)
    respond_with contacts, meta: pagination_meta(contacts)

  end

  def show
    respond_with @contact
  end

  def create
    @contact = Contact.create(contact_params)
    respond_with :api, :v1, @contact
  end

  def update
    @contact.update_attributes(contact_params)
    respond_with @contact, json: @contact
  end

  def destroy
    respond_with Contact.destroy(params[:id])
  end

  private

  def load_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:name, :phone, :email, :location,
                                    :project, :square, :floor, :question,
                                    :region, :source, :online_request,
                                    :come_in_office, :phone_call, :status,
                                    :user_id, :department, :assigned_to,
                                    :alt_email, :do_not_call)
  end
end
