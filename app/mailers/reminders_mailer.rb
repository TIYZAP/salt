class RemindersMailer < ApplicationMailer
  def send_reminder(user)
    attachments.inline['email-logo.png'] = File.read('public/images/email-logo.png')
    attachments.inline['salt-white2.png'] = File.read('public/images/salt-white2.png')
    @user = user
    mail( :to => @user.email,
    :subject => 'Please comeback to Grain of Salt')
  end

  def no_reviews(user)
    attachments.inline['email-logo.png'] = File.read('public/images/email-logo.png')
    attachments.inline['salt-white2.png'] = File.read('public/images/salt-white2.png')
    @user = user
    mail( :to => @user.email,
    :subject => 'You have yet to leave a review on Grain of Salt')
  end


end
