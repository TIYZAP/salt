class RecNotifierMailer < ActionMailer::Base
  default :from => 'TheSaltyTeam@grainofsalt-app.com'

  def send_rec_email(user, review)
    @user = user
    @review = review
    mail( :to => @user.email,
    :subject => 'Check out this recommendation!' )
  end
end
