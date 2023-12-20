package Avto.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avto.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Курс
 */
@Entity(name = "IISAvtoКурс")
@Table(schema = "public", name = "Курс")
public class Kurs {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Prepodavatel")
    @Convert("Prepodavatel")
    @Column(name = "Преподаватель", length = 16, unique = true, nullable = false)
    private UUID _prepodavatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Prepodavatel", insertable = false, updatable = false)
    private Prepodavatel prepodavatel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zadanie")
    @Convert("Zadanie")
    @Column(name = "Задание", length = 16, unique = true, nullable = false)
    private UUID _zadanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zadanie", insertable = false, updatable = false)
    private Zadanie zadanie;

    @OneToMany(mappedBy = "kurs", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<BDMaterialov> bdmaterialovs;


    public Kurs() {
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

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}