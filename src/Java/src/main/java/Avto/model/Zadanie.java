package Avto.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avto.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Задание
 */
@Entity(name = "IISAvtoЗадание")
@Table(schema = "public", name = "Задание")
public class Zadanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Описание")
    private String описание;

    @Column(name = "СрокСдачи")
    private Date сроксдачи;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavka")
    @Convert("Zayavka")
    @Column(name = "Заявка", length = 16, unique = true, nullable = false)
    private UUID _zayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavka", insertable = false, updatable = false)
    private Zayavka zayavka;


    public Zadanie() {
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

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }

    public Date getСрокСдачи() {
      return сроксдачи;
    }

    public void setСрокСдачи(Date сроксдачи) {
      this.сроксдачи = сроксдачи;
    }


}