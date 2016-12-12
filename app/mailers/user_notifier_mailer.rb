class UserNotifier < ActionMailer::Base
  default :from => 'TheSaltyTeam@grainofsalt-app.com'

  def send_signup_email(user)
    attachments.inline['email-logo.png'] = File.read('public/images/email-logo.png')
    attachments.inline['salt-white2.png'] = File.read('public/images/salt-white2.png')
    @user = user
    mail( :to => @user.email,
    :subject => 'Thanks for signing up for our amazing app' )
  end

end
