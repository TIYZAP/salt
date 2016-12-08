class RecNotifierMailer < ActionMailer::Base
  default :from => ''

  def send_rec_email(user, review)
    @user = user
    @review = review
    mail( :to => @user.email,
    :subject => 'Check out this recommendation!' )
  end
end
