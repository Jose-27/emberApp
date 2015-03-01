class LeadSerializer < ActiveModel::Serializer
	attributes :id, :first_name, :lase_name, :email, :phone, :status, :notes
end