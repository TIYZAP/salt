class RemindersMailer < ApplicationMailer
  def send_reminder(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Please comeback to Grain of Salt')
  end

  def no_reviews(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'You have yet to leave a review on Grain of Salt')
  end


end
