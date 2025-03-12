package com.TTT.Tniciu_API.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationEmail(String to, String token, String email) throws MessagingException {
        String subject = "Xác nhận đăng ký tài khoản - Tniciu Vegetable";
        String verificationLink = "https://tniciu-vegetable.vercel.app/verify?token=" + token + "&email=" + email;
        String content = "<html>"
                + "<body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>"
                + "<table align='center' width='600' style='background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px #ccc;'>"
                + "<tr>"
                + "<td align='center'>"
                + "<img src='https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/logo.png?1718181939137' alt='Tniciu Vegetable' width='150' style='margin-bottom: 20px;'/>"
                + "</td>"
                + "</tr>"
                + "<tr>"
                + "<td>"
                + "<h2 style='color: #008b4b;'>Xác nhận đăng ký tài khoản</h2>"
                + "<p>Cảm ơn bạn đã đăng ký tài khoản tại <strong>Tniciu Vegetable</strong>. Vui lòng nhấn vào nút bên dưới để kích hoạt tài khoản của bạn:</p>"
                + "<div style='text-align: center; margin: 20px 0;'>"
                + "<a href='" + verificationLink + "' style='background: #008b4b; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-size: 16px;'>Kích hoạt tài khoản</a>"
                + "</div>"
                + "<p>Nếu bạn không đăng ký tài khoản này, vui lòng bỏ qua email này.</p>"
                + "</td>"
                + "</tr>"
                + "</table>"
                + "</body>"
                + "</html>";

        sendEmail(to, subject, content);
    }

    public void sendVerificationSuccessEmail(String to) throws MessagingException {
        String subject = "Kích hoạt tài khoản thành công - Tniciu Vegetable";
        String content = "<html>"
                + "<body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>"
                + "<table align='center' width='600' style='background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px #ccc;'>"
                + "<tr>"
                + "<td align='center'>"
                + "<img src='https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/logo.png?1718181939137' alt='Tniciu Vegetable' width='150' style='margin-bottom: 20px;'/>"
                + "</td>"
                + "</tr>"
                + "<tr>"
                + "<td>"
                + "<h2 style='color: #008b4b;'>Kích hoạt tài khoản thành công</h2>"
                + "<p>Tài khoản của bạn đã được kích hoạt thành công trên <strong>Tniciu Vegetable</strong>.</p>"
                + "<p>Bây giờ bạn có thể đăng nhập và sử dụng dịch vụ của chúng tôi.</p>"
                + "</td>"
                + "</tr>"
                + "</table>"
                + "</body>"
                + "</html>";

        sendEmail(to, subject, content);
    }

    private void sendEmail(String to, String subject, String content) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);
        mailSender.send(message);
    }
}
