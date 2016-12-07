class RecNotifierMailer < ActionMailer::Base
  default :from => 'TheSaltyTeam@salty-app.com'

  def send_rec_email(user)
    @user = user
    @review = Review.find(params[:id])
    mail( :to => @user.email,
    :subject => 'Check out this recommendation!' )
  end
end
