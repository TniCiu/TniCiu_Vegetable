package com.TTT.Tniciu_API.Repository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.TTT.Tniciu_API.Model.New;
@Repository
public interface NewsRepository extends JpaRepository<New, Long> {
}
