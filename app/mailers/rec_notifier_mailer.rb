class RecNotifierMailer < ActionMailer::Base
  default :from => 'TheSaltyTeam@grainofsalt-app.com'

  def send_rec_email(user, review)
    attachments.inline['email-logo.png'] = File.read('public/images/email-logo.png')
    attachments.inline['salt-white2.png'] = File.read('public/images/salt-white2.png')
    @user = user
    @review = review
    mail( :to => @user.email,
    :subject => 'Check out this recommendation!' )
  end
end
