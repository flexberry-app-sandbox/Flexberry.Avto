﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avto
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// База данных материалов.
    /// </summary>
    // *** Start programmer edit section *** (БДМатериалов CustomAttributes)

    // *** End programmer edit section *** (БДМатериалов CustomAttributes)
    [AutoAltered()]
    [Caption("База данных материалов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БДМатериаловE", new string[] {
            "Материалы as \'Материалы\'",
            "Материалы.Содержание as \'Содержание\'"}, Hidden=new string[] {
            "Материалы.Содержание"})]
    [MasterViewDefineAttribute("БДМатериаловE", "Материалы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Содержание")]
    public class БДМатериалов : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Avto.Материалы fМатериалы;
        
        private IIS.Avto.Курс fКурс;
        
        // *** Start programmer edit section *** (БДМатериалов CustomMembers)

        // *** End programmer edit section *** (БДМатериалов CustomMembers)

        
        /// <summary>
        /// База данных материалов.
        /// </summary>
        // *** Start programmer edit section *** (БДМатериалов.Материалы CustomAttributes)

        // *** End programmer edit section *** (БДМатериалов.Материалы CustomAttributes)
        [PropertyStorage(new string[] {
                "Материалы"})]
        [NotNull()]
        public virtual IIS.Avto.Материалы Материалы
        {
            get
            {
                // *** Start programmer edit section *** (БДМатериалов.Материалы Get start)

                // *** End programmer edit section *** (БДМатериалов.Материалы Get start)
                IIS.Avto.Материалы result = this.fМатериалы;
                // *** Start programmer edit section *** (БДМатериалов.Материалы Get end)

                // *** End programmer edit section *** (БДМатериалов.Материалы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БДМатериалов.Материалы Set start)

                // *** End programmer edit section *** (БДМатериалов.Материалы Set start)
                this.fМатериалы = value;
                // *** Start programmer edit section *** (БДМатериалов.Материалы Set end)

                // *** End programmer edit section *** (БДМатериалов.Материалы Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Avto.Курс.
        /// </summary>
        // *** Start programmer edit section *** (БДМатериалов.Курс CustomAttributes)

        // *** End programmer edit section *** (БДМатериалов.Курс CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Курс"})]
        public virtual IIS.Avto.Курс Курс
        {
            get
            {
                // *** Start programmer edit section *** (БДМатериалов.Курс Get start)

                // *** End programmer edit section *** (БДМатериалов.Курс Get start)
                IIS.Avto.Курс result = this.fКурс;
                // *** Start programmer edit section *** (БДМатериалов.Курс Get end)

                // *** End programmer edit section *** (БДМатериалов.Курс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БДМатериалов.Курс Set start)

                // *** End programmer edit section *** (БДМатериалов.Курс Set start)
                this.fКурс = value;
                // *** Start programmer edit section *** (БДМатериалов.Курс Set end)

                // *** End programmer edit section *** (БДМатериалов.Курс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БДМатериаловE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БДМатериаловE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БДМатериаловE", typeof(IIS.Avto.БДМатериалов));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of БДМатериалов.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfБДМатериалов CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfБДМатериалов CustomAttributes)
    public class DetailArrayOfБДМатериалов : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Avto.DetailArrayOfБДМатериалов members)

        // *** End programmer edit section *** (IIS.Avto.DetailArrayOfБДМатериалов members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type БДМатериалов by index.
        /// </summary>
        /// <summary>
        /// Adds object with type БДМатериалов.
        /// </summary>
        public DetailArrayOfБДМатериалов(IIS.Avto.Курс fКурс) : 
                base(typeof(БДМатериалов), ((ICSSoft.STORMNET.DataObject)(fКурс)))
        {
        }
        
        public IIS.Avto.БДМатериалов this[int index]
        {
            get
            {
                return ((IIS.Avto.БДМатериалов)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Avto.БДМатериалов dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
