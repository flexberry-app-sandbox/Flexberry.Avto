package Avto.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avto.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Заявка
 */
@Entity(name = "IISAvtoЗаявка")
@Table(schema = "public", name = "Заявка")
public class Zayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Содержание")
    private String содержание;

    @Column(name = "ДатаСдачи")
    private Date датасдачи;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Student")
    @Convert("Student")
    @Column(name = "Студент", length = 16, unique = true, nullable = false)
    private UUID _studentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Student", insertable = false, updatable = false)
    private Student student;


    public Zayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getСодержание() {
      return содержание;
    }

    public void setСодержание(String содержание) {
      this.содержание = содержание;
    }

    public Date getДатаСдачи() {
      return датасдачи;
    }

    public void setДатаСдачи(Date датасдачи) {
      this.датасдачи = датасдачи;
    }


}