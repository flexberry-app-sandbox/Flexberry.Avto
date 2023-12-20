package Avto.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avto.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: БДМатериалов
 */
@Entity(name = "IISAvtoБДМатериалов")
@Table(schema = "public", name = "БДМатериалов")
public class BDMaterialov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Materialy")
    @Convert("Materialy")
    @Column(name = "Материалы", length = 16, unique = true, nullable = false)
    private UUID _materialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Materialy", insertable = false, updatable = false)
    private Materialy materialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kurs")
    @Convert("Kurs")
    @Column(name = "Курс", length = 16, unique = true, nullable = false)
    private UUID _kursid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kurs", insertable = false, updatable = false)
    private Kurs kurs;


    public BDMaterialov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}