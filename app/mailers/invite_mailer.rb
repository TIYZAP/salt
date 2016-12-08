class InviteMailer < ApplicationMailer

    def send_friends_invites(email, user)
      @email = email
      @user = user
      mail( :to => @email,
      :subject => 'Your friend would like you to join Grain of Salt!' )
    end
end
