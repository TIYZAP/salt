class InviteMailer < ApplicationMailer

    def send_friends_invites(email, user)
      attachments.inline['email-logo.png'] = File.read('public/images/email-logo.png')
      attachments.inline['salt-white2.png'] = File.read('public/images/salt-white2.png')
      @email = email
      @user = user
      mail( :to => @email,
      :subject => 'Your friend would like you to join Grain of Salt!' )
    end
end
