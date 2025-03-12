package com.TTT.Tniciu_API.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import com.TTT.Tniciu_API.Service.CloudinaryService;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${cloudinary.cloud_name}")
    private String cloudName;

    @Value("${cloudinary.api_key}")
    private String apiKey;

    @Value("${cloudinary.api_secret}")
    private String apiSecret;

    @Bean
    public CloudinaryService cloudinaryService() {
        return new CloudinaryService(cloudName, apiKey, apiSecret);
    }

   @Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/api/**")
            .allowedOrigins("*") // Cho phép tất cả các FE truy cập
            .allowedMethods("*") // Cho phép tất cả phương thức HTTP
            .allowedHeaders("*") // Cho phép tất cả headers
            .allowCredentials(false); // Không cần credentials (nếu dùng, origin không được là "*")
}

}
