// Datos territoriales de Chile (Regiones, Provincias y Comunas)
const CHILE_TERRITORIO = [
  {
    "nombre": "Arica y Parinacota",
    "region_iso_3166_2": "CL-AP",
    "capital_regional": "Arica",
    "provincias": [
      {
        "nombre": "Arica",
        "codigo": "ap01",
        "capital_provincial": "Arica",
        "comunas": [
          {
            "nombre": "Arica",
            "codigo": "ap0101"
          },
          {
            "nombre": "Camarones",
            "codigo": "ap0102"
          }
        ]
      },
      {
        "nombre": "Parinacota",
        "codigo": "ap02",
        "capital_provincial": "Putre",
        "comunas": [
          {
            "nombre": "Putre",
            "codigo": "ap0201"
          },
          {
            "nombre": "General Lagos",
            "codigo": "ap0202"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Tarapacá",
    "region_iso_3166_2": "CL-TA",
    "capital_regional": "Arica",
    "provincias": [
      {
        "nombre": "Iquique",
        "codigo": "ta01",
        "capital_provincial": "Iquique",
        "comunas": [
          {
            "nombre": "Iquique",
            "codigo": "ta0101"
          },
          {
            "nombre": "Alto Hospicio",
            "codigo": "ta0102"
          }
        ]
      },
      {
        "nombre": "Tamarugal",
        "codigo": "ta02",
        "capital_provincial": "Pozo Almonte",
        "comunas": [
          {
            "nombre": "Pozo Almonte",
            "codigo": "ta0201"
          },
          {
            "nombre": "Camiña",
            "codigo": "ta0202"
          },
          {
            "nombre": "Colchane",
            "codigo": "ta0203"
          },
          {
            "nombre": "Huara",
            "codigo": "ta0204"
          },
          {
            "nombre": "Pica",
            "codigo": "ta0205"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Antofagasta",
    "region_iso_3166_2": "CL-AN",
    "capital_regional": "Antofagasta",
    "provincias": [
      {
        "nombre": "Antofagasta",
        "codigo": "an01",
        "capital_provincial": "Antofagasta",
        "comunas": [
          {
            "nombre": "Antofagasta",
            "codigo": "an0101"
          },
          {
            "nombre": "Mejillones",
            "codigo": "an0102"
          },
          {
            "nombre": "Sierra Gorda",
            "codigo": "an0103"
          },
          {
            "nombre": "Taltal",
            "codigo": "an0104"
          }
        ]
      },
      {
        "nombre": "El Loa",
        "codigo": "an02",
        "capital_provincial": "Calama",
        "comunas": [
          {
            "nombre": "Calama",
            "codigo": "an0201"
          },
          {
            "nombre": "Ollagüe",
            "codigo": "an0202"
          },
          {
            "nombre": "San Pedro de Atacama",
            "codigo": "an0203"
          }
        ]
      },
      {
        "nombre": "Tocopilla",
        "codigo": "an03",
        "capital_provincial": "Tocopilla",
        "comunas": [
          {
            "nombre": "Tocopilla",
            "codigo": "an0301"
          },
          {
            "nombre": "María Elena",
            "codigo": "an0302"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Atacama",
    "region_iso_3166_2": "CL-AT",
    "capital_regional": "Copiapo",
    "provincias": [
      {
        "nombre": "Copiapó",
        "codigo": "at01",
        "capital_provincial": "Copiapo",
        "comunas": [
          {
            "nombre": "Copiapó",
            "codigo": "at0101"
          },
          {
            "nombre": "Caldera",
            "codigo": "at0102"
          },
          {
            "nombre": "Tierra Amarilla",
            "codigo": "at0103"
          }
        ]
      },
      {
        "nombre": "Chañaral",
        "codigo": "at02",
        "capital_provincial": "Chañaral",
        "comunas": [
          {
            "nombre": "Chañaral",
            "codigo": "at0201"
          },
          {
            "nombre": "Diego de Almagro",
            "codigo": "at0202"
          }
        ]
      },
      {
        "nombre": "Huasco",
        "codigo": "at03",
        "capital_provincial": "Vallenar",
        "comunas": [
          {
            "nombre": "Vallenar",
            "codigo": "at0301"
          },
          {
            "nombre": "Alto del Carmen",
            "codigo": "at0302"
          },
          {
            "nombre": "Freirina",
            "codigo": "at0303"
          },
          {
            "nombre": "Huasco",
            "codigo": "at0304"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Coquimbo",
    "region_iso_3166_2": "CL-CO",
    "capital_regional": "La Serena",
    "provincias": [
      {
        "nombre": "Elqui",
        "codigo": "co01",
        "capital_provincial": "Coquimbo",
        "comunas": [
          {
            "nombre": "La Serena",
            "codigo": "co0101"
          },
          {
            "nombre": "Coquimbo",
            "codigo": "co0102"
          },
          {
            "nombre": "Andacollo",
            "codigo": "co0103"
          },
          {
            "nombre": "La Higuera",
            "codigo": "co0104"
          },
          {
            "nombre": "Paiguano",
            "codigo": "co0105"
          },
          {
            "nombre": "Vicuña",
            "codigo": "co0106"
          }
        ]
      },
      {
        "nombre": "Choapa",
        "codigo": "co02",
        "capital_provincial": "Illapel",
        "comunas": [
          {
            "nombre": "Illapel",
            "codigo": "co0201"
          },
          {
            "nombre": "Canela",
            "codigo": "co0202"
          },
          {
            "nombre": "Los Vilos",
            "codigo": "co0203"
          },
          {
            "nombre": "Salamanca",
            "codigo": "co0204"
          }
        ]
      },
      {
        "nombre": "Limarí",
        "codigo": "co03",
        "capital_provincial": "Ovalle",
        "comunas": [
          {
            "nombre": "Ovalle",
            "codigo": "co0301"
          },
          {
            "nombre": "Combarbalá",
            "codigo": "co0302"
          },
          {
            "nombre": "Monte Patria",
            "codigo": "co0303"
          },
          {
            "nombre": "Punitaqui",
            "codigo": "co0304"
          },
          {
            "nombre": "Río Hurtado",
            "codigo": "co0305"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Valparaíso",
    "region_iso_3166_2": "CL-VS",
    "capital_regional": "Valparaíso",
    "provincias": [
      {
        "nombre": "Valparaíso",
        "codigo": "vs01",
        "capital_provincial": "Valparaíso",
        "comunas": [
          {
            "nombre": "Valparaíso",
            "codigo": "vs0101"
          },
          {
            "nombre": "Casablanca",
            "codigo": "vs0102"
          },
          {
            "nombre": "Concón",
            "codigo": "vs0103"
          },
          {
            "nombre": "Juan Fernández",
            "codigo": "vs0104"
          },
          {
            "nombre": "Puchuncaví",
            "codigo": "vs0105"
          },
          {
            "nombre": "Quintero",
            "codigo": "vs0107"
          },
          {
            "nombre": "Viña del Mar",
            "codigo": "vs0109"
          }
        ]
      },
      {
        "nombre": "Isla de Pascua",
        "codigo": "vs02",
        "capital_provincial": "Hanga Roa",
        "comunas": [
          {
            "nombre": "Isla de Pascua",
            "codigo": "vs0201"
          }
        ]
      },
      {
        "nombre": "Los Andes",
        "codigo": "vs03",
        "capital_provincial": "Los Andes",
        "comunas": [
          {
            "nombre": "Los Andes",
            "codigo": "vs0301"
          },
          {
            "nombre": "Calle Larga",
            "codigo": "vs0302"
          },
          {
            "nombre": "Riconada",
            "codigo": "vs0303"
          },
          {
            "nombre": "San Esteban",
            "codigo": "vs0304"
          }
        ]
      },
      {
        "nombre": "Petorca",
        "codigo": "vs04",
        "capital_provincial": "La Ligua",
        "comunas": [
          {
            "nombre": "La Ligua",
            "codigo": "vs0401"
          },
          {
            "nombre": "Cabildo",
            "codigo": "vs0402"
          },
          {
            "nombre": "Papudo",
            "codigo": "vs0403"
          },
          {
            "nombre": "Petorca",
            "codigo": "vs0404"
          },
          {
            "nombre": "Zapallar",
            "codigo": "vs0405"
          }
        ]
      },
      {
        "nombre": "Quillota",
        "codigo": "vs05",
        "capital_provincial": "Quillota",
        "comunas": [
          {
            "nombre": "Quillota",
            "codigo": "vs0501"
          },
          {
            "nombre": "Calera",
            "codigo": "vs0502"
          },
          {
            "nombre": "Hijuelas",
            "codigo": "vs0503"
          },
          {
            "nombre": "La Cruz",
            "codigo": "vs0504"
          },
          {
            "nombre": "Nogales",
            "codigo": "vs0506"
          }
        ]
      },
      {
        "nombre": "San Antonio",
        "codigo": "vs06",
        "capital_provincial": "San Antonio",
        "comunas": [
          {
            "nombre": "San Antonio",
            "codigo": "vs0601"
          },
          {
            "nombre": "Algarrobo",
            "codigo": "vs0602"
          },
          {
            "nombre": "Cartagena",
            "codigo": "vs0603"
          },
          {
            "nombre": "El Quisco",
            "codigo": "vs0604"
          },
          {
            "nombre": "El Tabo",
            "codigo": "vs0605"
          },
          {
            "nombre": "Santo Domingo",
            "codigo": "vs0606"
          }
        ]
      },
      {
        "nombre": "San Felipe de Aconcagua",
        "codigo": "vs07",
        "capital_provincial": "San Felipe",
        "comunas": [
          {
            "nombre": "San Felipe",
            "codigo": "vs0701"
          },
          {
            "nombre": "Catemu",
            "codigo": "vs0702"
          },
          {
            "nombre": "Llaillay",
            "codigo": "vs0703"
          },
          {
            "nombre": "Panquehue",
            "codigo": "vs0704"
          },
          {
            "nombre": "Putaendo",
            "codigo": "vs0705"
          },
          {
            "nombre": "Santa María",
            "codigo": "vs0706"
          }
        ]
      },
      {
        "nombre": "Marga Marga",
        "codigo": "vs08",
        "capital_provincial": "Quilpué",
        "comunas": [
          {
            "nombre": "Quilpué",
            "codigo": "vs0801"
          },
          {
            "nombre": "Limache",
            "codigo": "vs0802"
          },
          {
            "nombre": "Olmué",
            "codigo": "vs0803"
          },
          {
            "nombre": "Villa Alemana",
            "codigo": "vs0804"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región del Libertador Gral. Bernardo O'Higgins",
    "region_iso_3166_2": "CL-LI",
    "capital_regional": "Rancagua",
    "provincias": [
      {
        "nombre": "Cachapoal",
        "codigo": "li01",
        "capital_provincial": "Rancagua",
        "comunas": [
          {
            "nombre": "Rancagua",
            "codigo": "li0101"
          },
          {
            "nombre": "Codegua",
            "codigo": "li0102"
          },
          {
            "nombre": "Coinco",
            "codigo": "li0103"
          },
          {
            "nombre": "Coltauco",
            "codigo": "li0104"
          },
          {
            "nombre": "Doñihue",
            "codigo": "li0105"
          },
          {
            "nombre": "Graneros",
            "codigo": "li0106"
          },
          {
            "nombre": "Las Cabras",
            "codigo": "li0107"
          },
          {
            "nombre": "Machalí",
            "codigo": "li0108"
          },
          {
            "nombre": "Malloa",
            "codigo": "li0109"
          },
          {
            "nombre": "Mostazal",
            "codigo": "li0110"
          },
          {
            "nombre": "Olivar",
            "codigo": "li0111"
          },
          {
            "nombre": "Peumo",
            "codigo": "li0112"
          },
          {
            "nombre": "Pichidegua",
            "codigo": "li0113"
          },
          {
            "nombre": "Quinta de Tilcoco",
            "codigo": "li0114"
          },
          {
            "nombre": "Rengo",
            "codigo": "li0115"
          },
          {
            "nombre": "Requínoa",
            "codigo": "li0116"
          },
          {
            "nombre": "San Vicente",
            "codigo": "li0117"
          }
        ]
      },
      {
        "nombre": "Cardenal Caro",
        "codigo": "li02",
        "capital_provincial": "Pichilemu",
        "comunas": [
          {
            "nombre": "Pichilemu",
            "codigo": "li0201"
          },
          {
            "nombre": "La Estrella",
            "codigo": "li0202"
          },
          {
            "nombre": "Litueche",
            "codigo": "li0203"
          },
          {
            "nombre": "Marichihue",
            "codigo": "li0204"
          },
          {
            "nombre": "Navidad",
            "codigo": "li0205"
          },
          {
            "nombre": "Paredones",
            "codigo": "li0206"
          }
        ]
      },
      {
        "nombre": "Colchagua",
        "codigo": "li03",
        "capital_provincial": "San Fernando",
        "comunas": [
          {
            "nombre": "San Fernando",
            "codigo": "li0301"
          },
          {
            "nombre": "Chépica",
            "codigo": "li0302"
          },
          {
            "nombre": "Chimbarongo",
            "codigo": "li0303"
          },
          {
            "nombre": "Lolol",
            "codigo": "li0304"
          },
          {
            "nombre": "Nancagua",
            "codigo": "li0305"
          },
          {
            "nombre": "Palmilla",
            "codigo": "li0306"
          },
          {
            "nombre": "Peralillo",
            "codigo": "li0307"
          },
          {
            "nombre": "Placilla",
            "codigo": "li0308"
          },
          {
            "nombre": "Pumanque",
            "codigo": "li0309"
          },
          {
            "nombre": "Santa Cruz",
            "codigo": "li0310"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región del Maule",
    "region_iso_3166_2": "CL-ML",
    "capital_regional": "Talca",
    "provincias": [
      {
        "nombre": "Talca",
        "codigo": "ml01",
        "capital_provincial": "Talca",
        "comunas": [
          {
            "nombre": "Talca",
            "codigo": "ml0101"
          },
          {
            "nombre": "Constitución",
            "codigo": "ml0102"
          },
          {
            "nombre": "Curepto",
            "codigo": "ml0103"
          },
          {
            "nombre": "Empedrado",
            "codigo": "ml0104"
          },
          {
            "nombre": "Maule",
            "codigo": "ml0105"
          },
          {
            "nombre": "Pelarco",
            "codigo": "ml0106"
          },
          {
            "nombre": "Pencahue",
            "codigo": "ml0107"
          },
          {
            "nombre": "Río Claro",
            "codigo": "ml0108"
          },
          {
            "nombre": "San Clemente",
            "codigo": "ml0109"
          },
          {
            "nombre": "San Rafael",
            "codigo": "ml0110"
          }
        ]
      },
      {
        "nombre": "Cauquenes",
        "codigo": "ml02",
        "capital_provincial": "Cauquenes",
        "comunas": [
          {
            "nombre": "Cauquenes",
            "codigo": "ml0201"
          },
          {
            "nombre": "Chanco",
            "codigo": "ml0202"
          },
          {
            "nombre": "Pelluhue",
            "codigo": "ml0203"
          }
        ]
      },
      {
        "nombre": "Curicó",
        "codigo": "ml03",
        "capital_provincial": "Curicó",
        "comunas": [
          {
            "nombre": "Curicó",
            "codigo": "ml0301"
          },
          {
            "nombre": "Hualañé",
            "codigo": "ml0302"
          },
          {
            "nombre": "Licantén",
            "codigo": "ml0303"
          },
          {
            "nombre": "Molina",
            "codigo": "ml0304"
          },
          {
            "nombre": "Rauco",
            "codigo": "ml0305"
          },
          {
            "nombre": "Romeral",
            "codigo": "ml0306"
          },
          {
            "nombre": "Sagrada Familia",
            "codigo": "ml0307"
          },
          {
            "nombre": "Teno",
            "codigo": "ml0308"
          },
          {
            "nombre": "Vichuquén",
            "codigo": "ml0309"
          }
        ]
      },
      {
        "nombre": "Linares",
        "codigo": "ml04",
        "capital_provincial": "Linares",
        "comunas": [
          {
            "nombre": "Linares",
            "codigo": "ml0401"
          },
          {
            "nombre": "Colbún",
            "codigo": "ml0402"
          },
          {
            "nombre": "Longaví",
            "codigo": "ml0403"
          },
          {
            "nombre": "Parral",
            "codigo": "ml0404"
          },
          {
            "nombre": "Retiro",
            "codigo": "ml0405"
          },
          {
            "nombre": "San Javier",
            "codigo": "ml0406"
          },
          {
            "nombre": "Villa Alegre",
            "codigo": "ml0407"
          },
          {
            "nombre": "Yerbas Buenas",
            "codigo": "ml0408"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región del Biobío",
    "region_iso_3166_2": "CL-BI",
    "capital_regional": "Concepción",
    "provincias": [
      {
        "nombre": "Concepción",
        "codigo": "bi01",
        "capital_provincial": "Concepción",
        "comunas": [
          {
            "nombre": "Concepción",
            "codigo": "bi0101"
          },
          {
            "nombre": "Coronel",
            "codigo": "bi0102"
          },
          {
            "nombre": "Chiguayante",
            "codigo": "bi0103"
          },
          {
            "nombre": "Florida",
            "codigo": "bi0104"
          },
          {
            "nombre": "Hualqui",
            "codigo": "bi0105"
          },
          {
            "nombre": "Lota",
            "codigo": "bi0106"
          },
          {
            "nombre": "Penco",
            "codigo": "bi0107"
          },
          {
            "nombre": "San Pedro de la Paz",
            "codigo": "bi0108"
          },
          {
            "nombre": "Santa Juana",
            "codigo": "bi0109"
          },
          {
            "nombre": "Talcahuano",
            "codigo": "bi0110"
          },
          {
            "nombre": "Tomé",
            "codigo": "bi0111"
          },
          {
            "nombre": "Hualpén",
            "codigo": "bi0112"
          }
        ]
      },
      {
        "nombre": "Arauco",
        "codigo": "bi02",
        "capital_provincial": "Lebu",
        "comunas": [
          {
            "nombre": "Lebu",
            "codigo": "bi0201"
          },
          {
            "nombre": "Arauco",
            "codigo": "bi0202"
          },
          {
            "nombre": "Cañete",
            "codigo": "bi0203"
          },
          {
            "nombre": "Contulmo",
            "codigo": "bi0204"
          },
          {
            "nombre": "Curanilahue",
            "codigo": "bi0205"
          },
          {
            "nombre": "Los Álamos",
            "codigo": "bi0206"
          },
          {
            "nombre": "Tirúa",
            "codigo": "bi0207"
          }
        ]
      },
      {
        "nombre": "Biobío",
        "codigo": "bi03",
        "capital_provincial": "Los Ángeles",
        "comunas": [
          {
            "nombre": "Los Ángeles",
            "codigo": "bi0301"
          },
          {
            "nombre": "Antuco",
            "codigo": "bi0302"
          },
          {
            "nombre": "Cabrero",
            "codigo": "bi0303"
          },
          {
            "nombre": "Laja",
            "codigo": "bi0304"
          },
          {
            "nombre": "Mulchén",
            "codigo": "bi0305"
          },
          {
            "nombre": "Nacimiento",
            "codigo": "bi0306"
          },
          {
            "nombre": "Negrete",
            "codigo": "bi0307"
          },
          {
            "nombre": "Quilaco",
            "codigo": "bi0308"
          },
          {
            "nombre": "Quilleco",
            "codigo": "bi0309"
          },
          {
            "nombre": "San Rosendo",
            "codigo": "bi0310"
          },
          {
            "nombre": "Santa Bárbara",
            "codigo": "bi0311"
          },
          {
            "nombre": "Tucapel",
            "codigo": "bi0312"
          },
          {
            "nombre": "Yumbel",
            "codigo": "bi0313"
          },
          {
            "nombre": "Alto Biobío",
            "codigo": "bi0314"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región del Ñuble",
    "region_iso_3166_2": "CL-NB",
    "capital_regional": "Chillán",
    "provincias": [
      {
        "nombre": "Diguillín",
        "codigo": "nb01",
        "capital_provincial": "Bulnes",
        "comunas": [
          {
            "nombre": "Bulnes",
            "codigo": "nb0101"
          },
          {
            "nombre": "Chillán",
            "codigo": "nb0102"
          },
          {
            "nombre": "Chillán Viejo",
            "codigo": "nb0103"
          },
          {
            "nombre": "El Carmen",
            "codigo": "nb0104"
          },
          {
            "nombre": "Pemuco",
            "codigo": "nb0105"
          },
          {
            "nombre": "Pinto",
            "codigo": "nb0106"
          },
          {
            "nombre": "Quillón",
            "codigo": "nb0107"
          },
          {
            "nombre": "San Ignacio",
            "codigo": "nb0108"
          },
          {
            "nombre": "Yungay",
            "codigo": "nb0109"
          }
        ]
      },
      {
        "nombre": "Itata",
        "codigo": "nb02",
        "capital_provincial": "Quirihue",
        "comunas": [
          {
            "nombre": "Cobquecura",
            "codigo": "nb0201"
          },
          {
            "nombre": "Coelemu",
            "codigo": "nb0202"
          },
          {
            "nombre": "Ninhue",
            "codigo": "nb0203"
          },
          {
            "nombre": "Portezuelo",
            "codigo": "nb0204"
          },
          {
            "nombre": "Quirihue",
            "codigo": "nb0205"
          },
          {
            "nombre": "Ránquil",
            "codigo": "nb0206"
          },
          {
            "nombre": "Treguaco",
            "codigo": "nb0207"
          }
        ]
      },
      {
        "nombre": "Punilla",
        "codigo": "nb03",
        "capital_provincial": "San Carlos",
        "comunas": [
          {
            "nombre": "Coihueco",
            "codigo": "nb0301"
          },
          {
            "nombre": "Ñiquén",
            "codigo": "nb0302"
          },
          {
            "nombre": "San Carlos",
            "codigo": "nb0303"
          },
          {
            "nombre": "San Fabián",
            "codigo": "nb0304"
          },
          {
            "nombre": "San Nicolas",
            "codigo": "nb0305"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región de la Araucanía",
    "region_iso_3166_2": "CL-AR",
    "capital_regional": "Temuco",
    "provincias": [
      {
        "nombre": "Cautín",
        "codigo": "ar01",
        "capital_provincial": "Temuco",
        "comunas": [
          {
            "nombre": "Temuco",
            "codigo": "ar0101"
          },
          {
            "nombre": "Carahu",
            "codigo": "ar0102"
          },
          {
            "nombre": "Cunco",
            "codigo": "ar0103"
          },
          {
            "nombre": "Curarrehue",
            "codigo": "ar0104"
          },
          {
            "nombre": "Freire",
            "codigo": "ar0105"
          },
          {
            "nombre": "Galvarin",
            "codigo": "ar0106"
          },
          {
            "nombre": "Gorbea",
            "codigo": "ar0107"
          },
          {
            "nombre": "Lautaro",
            "codigo": "ar0108"
          },
          {
            "nombre": "Loncoche",
            "codigo": "ar0109"
          },
          {
            "nombre": "Melipeuco",
            "codigo": "ar0110"
          },
          {
            "nombre": "Nueva Imperial",
            "codigo": "ar0111"
          },
          {
            "nombre": "Padre las Casa",
            "codigo": "ar0112"
          },
          {
            "nombre": "Perquenco",
            "codigo": "ar0113"
          },
          {
            "nombre": "Pitrufquén",
            "codigo": "ar0114"
          },
          {
            "nombre": "Pucó",
            "codigo": "ar0115"
          },
          {
            "nombre": "Saavedra",
            "codigo": "ar0116"
          },
          {
            "nombre": "Teodoro Schmid",
            "codigo": "ar0117"
          },
          {
            "nombre": "Toltén",
            "codigo": "ar0118"
          },
          {
            "nombre": "Vilcún",
            "codigo": "ar0119"
          },
          {
            "nombre": "Villarrica",
            "codigo": "ar0120"
          },
          {
            "nombre": "Cholchol",
            "codigo": "ar0121"
          }
        ]
      },
      {
        "nombre": "Malleco",
        "codigo": "ar02",
        "capital_provincial": "Angol",
        "comunas": [
          {
            "nombre": "Angol",
            "codigo": "ar0201"
          },
          {
            "nombre": "Collipulli",
            "codigo": "ar0202"
          },
          {
            "nombre": "Curacautín",
            "codigo": "ar0203"
          },
          {
            "nombre": "Ercilla",
            "codigo": "ar0204"
          },
          {
            "nombre": "Lonquimay",
            "codigo": "ar0205"
          },
          {
            "nombre": "Los Sauces",
            "codigo": "ar0206"
          },
          {
            "nombre": "Lumaco",
            "codigo": "ar0207"
          },
          {
            "nombre": "Purén",
            "codigo": "ar0208"
          },
          {
            "nombre": "Renaico",
            "codigo": "ar0209"
          },
          {
            "nombre": "Traiguén",
            "codigo": "ar0210"
          },
          {
            "nombre": "Victoria",
            "codigo": "ar0211"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región de los Ríos",
    "region_iso_3166_2": "CL-LR",
    "capital_regional": "Valdivia",
    "provincias": [
      {
        "nombre": "Valdivia",
        "codigo": "lr01",
        "capital_provincial": "Valdivia",
        "comunas": [
          {
            "nombre": "Valdivia",
            "codigo": "lr0101"
          },
          {
            "nombre": "Corral",
            "codigo": "lr0102"
          },
          {
            "nombre": "Lanco",
            "codigo": "lr0103"
          },
          {
            "nombre": "Los Lagos",
            "codigo": "lr0104"
          },
          {
            "nombre": "Máfil",
            "codigo": "lr0105"
          },
          {
            "nombre": "Mariquina",
            "codigo": "lr0106"
          },
          {
            "nombre": "Paillaco",
            "codigo": "lr0107"
          },
          {
            "nombre": "Panguipulli",
            "codigo": "lr0108"
          }
        ]
      },
      {
        "nombre": "Ranco",
        "codigo": "lr02",
        "capital_provincial": "La Unión",
        "comunas": [
          {
            "nombre": "La Unión",
            "codigo": "lr0201"
          },
          {
            "nombre": "Futrono",
            "codigo": "lr0202"
          },
          {
            "nombre": "Lago Ranco",
            "codigo": "lr0203"
          },
          {
            "nombre": "Río Bueno",
            "codigo": "lr0204"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región de los Lagos",
    "region_iso_3166_2": "CL-LL",
    "capital_regional": "Puerto Montt",
    "provincias": [
      {
        "nombre": "Llanquihue",
        "codigo": "ll01",
        "capital_provincial": "Puerto Montt",
        "comunas": [
          {
            "nombre": "Puerto Montt",
            "codigo": "ll0101"
          },
          {
            "nombre": "Calbuco",
            "codigo": "ll0102"
          },
          {
            "nombre": "Cochamó",
            "codigo": "ll0103"
          },
          {
            "nombre": "Fresia",
            "codigo": "ll0104"
          },
          {
            "nombre": "Frutillar",
            "codigo": "ll0105"
          },
          {
            "nombre": "Los Muermos",
            "codigo": "ll0106"
          },
          {
            "nombre": "Llanquihue",
            "codigo": "ll0107"
          },
          {
            "nombre": "Maullín",
            "codigo": "ll0108"
          },
          {
            "nombre": "Puerto Varas",
            "codigo": "ll0109"
          }
        ]
      },
      {
        "nombre": "Chiloé",
        "codigo": "ll02",
        "capital_provincial": "Castro",
        "comunas": [
          {
            "nombre": "Castro",
            "codigo": "ll0201"
          },
          {
            "nombre": "Ancud",
            "codigo": "ll0202"
          },
          {
            "nombre": "Chonchi",
            "codigo": "ll0203"
          },
          {
            "nombre": "Curaco de Vélez",
            "codigo": "ll0204"
          },
          {
            "nombre": "Dalcahue",
            "codigo": "ll0205"
          },
          {
            "nombre": "Puqueldón",
            "codigo": "ll0206"
          },
          {
            "nombre": "Queilén",
            "codigo": "ll0207"
          },
          {
            "nombre": "Quellón",
            "codigo": "ll0208"
          },
          {
            "nombre": "Quemchi",
            "codigo": "ll0209"
          },
          {
            "nombre": "Quinchao",
            "codigo": "ll0210"
          }
        ]
      },
      {
        "nombre": "Osorno",
        "codigo": "ll03",
        "capital_provincial": "Osorno",
        "comunas": [
          {
            "nombre": "Osorno",
            "codigo": "ll0301"
          },
          {
            "nombre": "Puerto Octay",
            "codigo": "ll0302"
          },
          {
            "nombre": "Purranque",
            "codigo": "ll0303"
          },
          {
            "nombre": "Puyehue",
            "codigo": "ll0304"
          },
          {
            "nombre": "Río Negro",
            "codigo": "ll0305"
          },
          {
            "nombre": "San Juan de la Costa",
            "codigo": "ll0306"
          },
          {
            "nombre": "San Pablo",
            "codigo": "ll0307"
          }
        ]
      },
      {
        "nombre": "Palena",
        "codigo": "ll04",
        "capital_provincial": "Chaitén",
        "comunas": [
          {
            "nombre": "Chaitén",
            "codigo": "ll0401"
          },
          {
            "nombre": "Futaleufú",
            "codigo": "ll0402"
          },
          {
            "nombre": "Hualaihué",
            "codigo": "ll0403"
          },
          {
            "nombre": "Palena",
            "codigo": "ll0404"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región Aisén del Gral. Carlos Ibañez del Campo",
    "region_iso_3166_2": "CL-AI",
    "capital_regional": "Coyhaique",
    "provincias": [
      {
        "nombre": "Coyhaique",
        "codigo": "ai01",
        "capital_provincial": "Coyhaique",
        "comunas": [
          {
            "nombre": "Coyhaique",
            "codigo": "ai0101"
          },
          {
            "nombre": "Lago Verde",
            "codigo": "ai0102"
          }
        ]
      },
      {
        "nombre": "Aysén",
        "codigo": "ai02",
        "capital_provincial": "Puerto Aysén",
        "comunas": [
          {
            "nombre": "Aisén",
            "codigo": "ai0201"
          },
          {
            "nombre": "Cisnes",
            "codigo": "ai0202"
          },
          {
            "nombre": "Guaitecas",
            "codigo": "ai0203"
          }
        ]
      },
      {
        "nombre": "Capitán Pratt",
        "codigo": "ai03",
        "capital_provincial": "Cochrane",
        "comunas": [
          {
            "nombre": "Cochrane",
            "codigo": "ai0301"
          },
          {
            "nombre": "O’Higgins",
            "codigo": "ai0302"
          },
          {
            "nombre": "Tortel",
            "codigo": "ai0303"
          }
        ]
      },
      {
        "nombre": "General Carrera",
        "codigo": "ai04",
        "capital_provincial": "Chile Chico",
        "comunas": [
          {
            "nombre": "Chile Chico",
            "codigo": "ai0401"
          },
          {
            "nombre": "Río Ibáñez",
            "codigo": "ai0402"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región de Magallanes y de la Antártica Chilena",
    "region_iso_3166_2": "CL-MA",
    "capital_regional": "Punta Arenas",
    "provincias": [
      {
        "nombre": "Magallanes",
        "codigo": "ma01",
        "capital_provincial": "Punta Arenas",
        "comunas": [
          {
            "nombre": "Punta Arenas",
            "codigo": "ma0101"
          },
          {
            "nombre": "Laguna Blanca",
            "codigo": "ma0102"
          },
          {
            "nombre": "Río Verde",
            "codigo": "ma0103"
          },
          {
            "nombre": "San Gregorio",
            "codigo": "ma0104"
          }
        ]
      },
      {
        "nombre": "Antártica Chilena",
        "codigo": "ma02",
        "capital_provincial": "Puerto Williams",
        "comunas": [
          {
            "nombre": "Cabo de Hornos (Ex. Navarino)",
            "codigo": "ma0201"
          },
          {
            "nombre": "Antártica",
            "codigo": "ma0202"
          }
        ]
      },
      {
        "nombre": "Tierra del Fuego",
        "codigo": "ma03",
        "capital_provincial": "Porvenir",
        "comunas": [
          {
            "nombre": "Porvenir",
            "codigo": "ma0301"
          },
          {
            "nombre": "Primavera",
            "codigo": "ma0302"
          },
          {
            "nombre": "Timaukel",
            "codigo": "ma0303"
          }
        ]
      },
      {
        "nombre": "Última Esperanza",
        "codigo": "ma04",
        "capital_provincial": "Puerto Natales",
        "comunas": [
          {
            "nombre": "Natales",
            "codigo": "ma0401"
          },
          {
            "nombre": "Torres del Paine",
            "codigo": "ma0402"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Región Metropolitana de Santiago",
    "region_iso_3166_2": "CL-RM",
    "capital_regional": "Santiago",
    "provincias": [
      {
        "nombre": "Santiago",
        "codigo": "rm01",
        "capital_provincial": "Santiago",
        "comunas": [
          {
            "nombre": "Santiago",
            "codigo": "rm0101"
          },
          {
            "nombre": "Cerrillos",
            "codigo": "rm0102"
          },
          {
            "nombre": "Cerro Navia",
            "codigo": "rm0103"
          },
          {
            "nombre": "Conchalí",
            "codigo": "rm0104"
          },
          {
            "nombre": "El Bosque",
            "codigo": "rm0105"
          },
          {
            "nombre": "Estación Central",
            "codigo": "rm0106"
          },
          {
            "nombre": "Huechuraba",
            "codigo": "rm0107"
          },
          {
            "nombre": "Independencia",
            "codigo": "rm0108"
          },
          {
            "nombre": "La Cisterna",
            "codigo": "rm0109"
          },
          {
            "nombre": "La Florida",
            "codigo": "rm0110"
          },
          {
            "nombre": "La Granja",
            "codigo": "rm0111"
          },
          {
            "nombre": "La Pintana",
            "codigo": "rm0112"
          },
          {
            "nombre": "La Reina",
            "codigo": "rm0113"
          },
          {
            "nombre": "Las Condes",
            "codigo": "rm0114"
          },
          {
            "nombre": "Lo Barnechea",
            "codigo": "rm0115"
          },
          {
            "nombre": "Lo Espejo",
            "codigo": "rm0116"
          },
          {
            "nombre": "Lo Prado",
            "codigo": "rm0117"
          },
          {
            "nombre": "Macul",
            "codigo": "rm0118"
          },
          {
            "nombre": "Maipú",
            "codigo": "rm0119"
          },
          {
            "nombre": "Ñuñoa",
            "codigo": "rm0120"
          },
          {
            "nombre": "Pedro Aguirre Cerda",
            "codigo": "rm0121"
          },
          {
            "nombre": "Peñalolén",
            "codigo": "rm0122"
          },
          {
            "nombre": "Providencia",
            "codigo": "rm0123"
          },
          {
            "nombre": "Pudahuel",
            "codigo": "rm0124"
          },
          {
            "nombre": "Quilicura",
            "codigo": "rm0125"
          },
          {
            "nombre": "Quinta Normal",
            "codigo": "rm0126"
          },
          {
            "nombre": "Recoleta",
            "codigo": "rm0127"
          },
          {
            "nombre": "Renca",
            "codigo": "rm0128"
          },
          {
            "nombre": "San Joaquín",
            "codigo": "rm0129"
          },
          {
            "nombre": "San Miguel",
            "codigo": "rm0130"
          },
          {
            "nombre": "San Ramón",
            "codigo": "rm0131"
          },
          {
            "nombre": "Vitacura",
            "codigo": "rm0132"
          }
        ]
      },
      {
        "nombre": "Cordillera",
        "codigo": "rm02",
        "capital_provincial": "Puente Alto",
        "comunas": [
          {
            "nombre": "Puente Alto",
            "codigo": "rm0201"
          },
          {
            "nombre": "Pirque",
            "codigo": "rm0202"
          },
          {
            "nombre": "San José de Maipo",
            "codigo": "rm0203"
          }
        ]
      },
      {
        "nombre": "Chacabuco",
        "codigo": "rm03",
        "capital_provincial": "Colina",
        "comunas": [
          {
            "nombre": "Colina",
            "codigo": "rm0301"
          },
          {
            "nombre": "Lampa",
            "codigo": "rm0302"
          },
          {
            "nombre": "Tiltil",
            "codigo": "rm0303"
          }
        ]
      },
      {
        "nombre": "Maipo",
        "codigo": "rm04",
        "capital_provincial": "San Bernardo",
        "comunas": [
          {
            "nombre": "San Bernardo",
            "codigo": "rm0401"
          },
          {
            "nombre": "Buin",
            "codigo": "rm0402"
          },
          {
            "nombre": "Calera de Tango",
            "codigo": "rm0403"
          },
          {
            "nombre": "Paine",
            "codigo": "rm0404"
          }
        ]
      },
      {
        "nombre": "Mellipilla",
        "codigo": "rm05",
        "capital_provincial": "Melipilla",
        "comunas": [
          {
            "nombre": "Melipilla",
            "codigo": "rm0501"
          },
          {
            "nombre": "Alhué",
            "codigo": "rm0502"
          },
          {
            "nombre": "Curacaví",
            "codigo": "rm0503"
          },
          {
            "nombre": "María Pinto",
            "codigo": "rm0504"
          },
          {
            "nombre": "San Pedro",
            "codigo": "rm0505"
          }
        ]
      },
      {
        "nombre": "Talagante",
        "codigo": "rm06",
        "capital_provincial": "Talagante",
        "comunas": [
          {
            "nombre": "Talagante",
            "codigo": "rm0601"
          },
          {
            "nombre": "El Monte",
            "codigo": "rm0602"
          },
          {
            "nombre": "Isla de Maipo",
            "codigo": "rm0603"
          },
          {
            "nombre": "Padre Hurtado",
            "codigo": "rm0604"
          },
          {
            "nombre": "Peñaflor",
            "codigo": "rm0605"
          }
        ]
      }
    ]
  }
];

const CHILE_FLAT_COMMUNES = {
  "arica": {
    "comuna": "Arica",
    "provincia": "Arica",
    "region": "Arica y Parinacota"
  },
  "camarones": {
    "comuna": "Camarones",
    "provincia": "Arica",
    "region": "Arica y Parinacota"
  },
  "putre": {
    "comuna": "Putre",
    "provincia": "Parinacota",
    "region": "Arica y Parinacota"
  },
  "general lagos": {
    "comuna": "General Lagos",
    "provincia": "Parinacota",
    "region": "Arica y Parinacota"
  },
  "iquique": {
    "comuna": "Iquique",
    "provincia": "Iquique",
    "region": "Tarapacá"
  },
  "alto hospicio": {
    "comuna": "Alto Hospicio",
    "provincia": "Iquique",
    "region": "Tarapacá"
  },
  "pozo almonte": {
    "comuna": "Pozo Almonte",
    "provincia": "Tamarugal",
    "region": "Tarapacá"
  },
  "camiña": {
    "comuna": "Camiña",
    "provincia": "Tamarugal",
    "region": "Tarapacá"
  },
  "colchane": {
    "comuna": "Colchane",
    "provincia": "Tamarugal",
    "region": "Tarapacá"
  },
  "huara": {
    "comuna": "Huara",
    "provincia": "Tamarugal",
    "region": "Tarapacá"
  },
  "pica": {
    "comuna": "Pica",
    "provincia": "Tamarugal",
    "region": "Tarapacá"
  },
  "antofagasta": {
    "comuna": "Antofagasta",
    "provincia": "Antofagasta",
    "region": "Antofagasta"
  },
  "mejillones": {
    "comuna": "Mejillones",
    "provincia": "Antofagasta",
    "region": "Antofagasta"
  },
  "sierra gorda": {
    "comuna": "Sierra Gorda",
    "provincia": "Antofagasta",
    "region": "Antofagasta"
  },
  "taltal": {
    "comuna": "Taltal",
    "provincia": "Antofagasta",
    "region": "Antofagasta"
  },
  "calama": {
    "comuna": "Calama",
    "provincia": "El Loa",
    "region": "Antofagasta"
  },
  "ollagüe": {
    "comuna": "Ollagüe",
    "provincia": "El Loa",
    "region": "Antofagasta"
  },
  "san pedro de atacama": {
    "comuna": "San Pedro de Atacama",
    "provincia": "El Loa",
    "region": "Antofagasta"
  },
  "tocopilla": {
    "comuna": "Tocopilla",
    "provincia": "Tocopilla",
    "region": "Antofagasta"
  },
  "maría elena": {
    "comuna": "María Elena",
    "provincia": "Tocopilla",
    "region": "Antofagasta"
  },
  "copiapó": {
    "comuna": "Copiapó",
    "provincia": "Copiapó",
    "region": "Atacama"
  },
  "caldera": {
    "comuna": "Caldera",
    "provincia": "Copiapó",
    "region": "Atacama"
  },
  "tierra amarilla": {
    "comuna": "Tierra Amarilla",
    "provincia": "Copiapó",
    "region": "Atacama"
  },
  "chañaral": {
    "comuna": "Chañaral",
    "provincia": "Chañaral",
    "region": "Atacama"
  },
  "diego de almagro": {
    "comuna": "Diego de Almagro",
    "provincia": "Chañaral",
    "region": "Atacama"
  },
  "vallenar": {
    "comuna": "Vallenar",
    "provincia": "Huasco",
    "region": "Atacama"
  },
  "alto del carmen": {
    "comuna": "Alto del Carmen",
    "provincia": "Huasco",
    "region": "Atacama"
  },
  "freirina": {
    "comuna": "Freirina",
    "provincia": "Huasco",
    "region": "Atacama"
  },
  "huasco": {
    "comuna": "Huasco",
    "provincia": "Huasco",
    "region": "Atacama"
  },
  "la serena": {
    "comuna": "La Serena",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "coquimbo": {
    "comuna": "Coquimbo",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "andacollo": {
    "comuna": "Andacollo",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "la higuera": {
    "comuna": "La Higuera",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "paiguano": {
    "comuna": "Paiguano",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "vicuña": {
    "comuna": "Vicuña",
    "provincia": "Elqui",
    "region": "Coquimbo"
  },
  "illapel": {
    "comuna": "Illapel",
    "provincia": "Choapa",
    "region": "Coquimbo"
  },
  "canela": {
    "comuna": "Canela",
    "provincia": "Choapa",
    "region": "Coquimbo"
  },
  "los vilos": {
    "comuna": "Los Vilos",
    "provincia": "Choapa",
    "region": "Coquimbo"
  },
  "salamanca": {
    "comuna": "Salamanca",
    "provincia": "Choapa",
    "region": "Coquimbo"
  },
  "ovalle": {
    "comuna": "Ovalle",
    "provincia": "Limarí",
    "region": "Coquimbo"
  },
  "combarbalá": {
    "comuna": "Combarbalá",
    "provincia": "Limarí",
    "region": "Coquimbo"
  },
  "monte patria": {
    "comuna": "Monte Patria",
    "provincia": "Limarí",
    "region": "Coquimbo"
  },
  "punitaqui": {
    "comuna": "Punitaqui",
    "provincia": "Limarí",
    "region": "Coquimbo"
  },
  "río hurtado": {
    "comuna": "Río Hurtado",
    "provincia": "Limarí",
    "region": "Coquimbo"
  },
  "valparaíso": {
    "comuna": "Valparaíso",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "casablanca": {
    "comuna": "Casablanca",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "concón": {
    "comuna": "Concón",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "juan fernández": {
    "comuna": "Juan Fernández",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "puchuncaví": {
    "comuna": "Puchuncaví",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "quintero": {
    "comuna": "Quintero",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "viña del mar": {
    "comuna": "Viña del Mar",
    "provincia": "Valparaíso",
    "region": "Valparaíso"
  },
  "isla de pascua": {
    "comuna": "Isla de Pascua",
    "provincia": "Isla de Pascua",
    "region": "Valparaíso"
  },
  "los andes": {
    "comuna": "Los Andes",
    "provincia": "Los Andes",
    "region": "Valparaíso"
  },
  "calle larga": {
    "comuna": "Calle Larga",
    "provincia": "Los Andes",
    "region": "Valparaíso"
  },
  "riconada": {
    "comuna": "Riconada",
    "provincia": "Los Andes",
    "region": "Valparaíso"
  },
  "san esteban": {
    "comuna": "San Esteban",
    "provincia": "Los Andes",
    "region": "Valparaíso"
  },
  "la ligua": {
    "comuna": "La Ligua",
    "provincia": "Petorca",
    "region": "Valparaíso"
  },
  "cabildo": {
    "comuna": "Cabildo",
    "provincia": "Petorca",
    "region": "Valparaíso"
  },
  "papudo": {
    "comuna": "Papudo",
    "provincia": "Petorca",
    "region": "Valparaíso"
  },
  "petorca": {
    "comuna": "Petorca",
    "provincia": "Petorca",
    "region": "Valparaíso"
  },
  "zapallar": {
    "comuna": "Zapallar",
    "provincia": "Petorca",
    "region": "Valparaíso"
  },
  "quillota": {
    "comuna": "Quillota",
    "provincia": "Quillota",
    "region": "Valparaíso"
  },
  "calera": {
    "comuna": "Calera",
    "provincia": "Quillota",
    "region": "Valparaíso"
  },
  "hijuelas": {
    "comuna": "Hijuelas",
    "provincia": "Quillota",
    "region": "Valparaíso"
  },
  "la cruz": {
    "comuna": "La Cruz",
    "provincia": "Quillota",
    "region": "Valparaíso"
  },
  "nogales": {
    "comuna": "Nogales",
    "provincia": "Quillota",
    "region": "Valparaíso"
  },
  "san antonio": {
    "comuna": "San Antonio",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "algarrobo": {
    "comuna": "Algarrobo",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "cartagena": {
    "comuna": "Cartagena",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "el quisco": {
    "comuna": "El Quisco",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "el tabo": {
    "comuna": "El Tabo",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "santo domingo": {
    "comuna": "Santo Domingo",
    "provincia": "San Antonio",
    "region": "Valparaíso"
  },
  "san felipe": {
    "comuna": "San Felipe",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "catemu": {
    "comuna": "Catemu",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "llaillay": {
    "comuna": "Llaillay",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "panquehue": {
    "comuna": "Panquehue",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "putaendo": {
    "comuna": "Putaendo",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "santa maría": {
    "comuna": "Santa María",
    "provincia": "San Felipe de Aconcagua",
    "region": "Valparaíso"
  },
  "quilpué": {
    "comuna": "Quilpué",
    "provincia": "Marga Marga",
    "region": "Valparaíso"
  },
  "limache": {
    "comuna": "Limache",
    "provincia": "Marga Marga",
    "region": "Valparaíso"
  },
  "olmué": {
    "comuna": "Olmué",
    "provincia": "Marga Marga",
    "region": "Valparaíso"
  },
  "villa alemana": {
    "comuna": "Villa Alemana",
    "provincia": "Marga Marga",
    "region": "Valparaíso"
  },
  "rancagua": {
    "comuna": "Rancagua",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "codegua": {
    "comuna": "Codegua",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "coinco": {
    "comuna": "Coinco",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "coltauco": {
    "comuna": "Coltauco",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "doñihue": {
    "comuna": "Doñihue",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "graneros": {
    "comuna": "Graneros",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "las cabras": {
    "comuna": "Las Cabras",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "machalí": {
    "comuna": "Machalí",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "malloa": {
    "comuna": "Malloa",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "mostazal": {
    "comuna": "Mostazal",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "olivar": {
    "comuna": "Olivar",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "peumo": {
    "comuna": "Peumo",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "pichidegua": {
    "comuna": "Pichidegua",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "quinta de tilcoco": {
    "comuna": "Quinta de Tilcoco",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "rengo": {
    "comuna": "Rengo",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "requínoa": {
    "comuna": "Requínoa",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "san vicente": {
    "comuna": "San Vicente",
    "provincia": "Cachapoal",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "pichilemu": {
    "comuna": "Pichilemu",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "la estrella": {
    "comuna": "La Estrella",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "litueche": {
    "comuna": "Litueche",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "marichihue": {
    "comuna": "Marichihue",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "navidad": {
    "comuna": "Navidad",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "paredones": {
    "comuna": "Paredones",
    "provincia": "Cardenal Caro",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "san fernando": {
    "comuna": "San Fernando",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "chépica": {
    "comuna": "Chépica",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "chimbarongo": {
    "comuna": "Chimbarongo",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "lolol": {
    "comuna": "Lolol",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "nancagua": {
    "comuna": "Nancagua",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "palmilla": {
    "comuna": "Palmilla",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "peralillo": {
    "comuna": "Peralillo",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "placilla": {
    "comuna": "Placilla",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "pumanque": {
    "comuna": "Pumanque",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "santa cruz": {
    "comuna": "Santa Cruz",
    "provincia": "Colchagua",
    "region": "Región del Libertador Gral. Bernardo O'Higgins"
  },
  "talca": {
    "comuna": "Talca",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "constitución": {
    "comuna": "Constitución",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "curepto": {
    "comuna": "Curepto",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "empedrado": {
    "comuna": "Empedrado",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "maule": {
    "comuna": "Maule",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "pelarco": {
    "comuna": "Pelarco",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "pencahue": {
    "comuna": "Pencahue",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "río claro": {
    "comuna": "Río Claro",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "san clemente": {
    "comuna": "San Clemente",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "san rafael": {
    "comuna": "San Rafael",
    "provincia": "Talca",
    "region": "Región del Maule"
  },
  "cauquenes": {
    "comuna": "Cauquenes",
    "provincia": "Cauquenes",
    "region": "Región del Maule"
  },
  "chanco": {
    "comuna": "Chanco",
    "provincia": "Cauquenes",
    "region": "Región del Maule"
  },
  "pelluhue": {
    "comuna": "Pelluhue",
    "provincia": "Cauquenes",
    "region": "Región del Maule"
  },
  "curicó": {
    "comuna": "Curicó",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "hualañé": {
    "comuna": "Hualañé",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "licantén": {
    "comuna": "Licantén",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "molina": {
    "comuna": "Molina",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "rauco": {
    "comuna": "Rauco",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "romeral": {
    "comuna": "Romeral",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "sagrada familia": {
    "comuna": "Sagrada Familia",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "teno": {
    "comuna": "Teno",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "vichuquén": {
    "comuna": "Vichuquén",
    "provincia": "Curicó",
    "region": "Región del Maule"
  },
  "linares": {
    "comuna": "Linares",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "colbún": {
    "comuna": "Colbún",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "longaví": {
    "comuna": "Longaví",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "parral": {
    "comuna": "Parral",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "retiro": {
    "comuna": "Retiro",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "san javier": {
    "comuna": "San Javier",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "villa alegre": {
    "comuna": "Villa Alegre",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "yerbas buenas": {
    "comuna": "Yerbas Buenas",
    "provincia": "Linares",
    "region": "Región del Maule"
  },
  "concepción": {
    "comuna": "Concepción",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "coronel": {
    "comuna": "Coronel",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "chiguayante": {
    "comuna": "Chiguayante",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "florida": {
    "comuna": "Florida",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "hualqui": {
    "comuna": "Hualqui",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "lota": {
    "comuna": "Lota",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "penco": {
    "comuna": "Penco",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "san pedro de la paz": {
    "comuna": "San Pedro de la Paz",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "santa juana": {
    "comuna": "Santa Juana",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "talcahuano": {
    "comuna": "Talcahuano",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "tomé": {
    "comuna": "Tomé",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "hualpén": {
    "comuna": "Hualpén",
    "provincia": "Concepción",
    "region": "Región del Biobío"
  },
  "lebu": {
    "comuna": "Lebu",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "arauco": {
    "comuna": "Arauco",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "cañete": {
    "comuna": "Cañete",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "contulmo": {
    "comuna": "Contulmo",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "curanilahue": {
    "comuna": "Curanilahue",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "los álamos": {
    "comuna": "Los Álamos",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "tirúa": {
    "comuna": "Tirúa",
    "provincia": "Arauco",
    "region": "Región del Biobío"
  },
  "los ángeles": {
    "comuna": "Los Ángeles",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "antuco": {
    "comuna": "Antuco",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "cabrero": {
    "comuna": "Cabrero",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "laja": {
    "comuna": "Laja",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "mulchén": {
    "comuna": "Mulchén",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "nacimiento": {
    "comuna": "Nacimiento",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "negrete": {
    "comuna": "Negrete",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "quilaco": {
    "comuna": "Quilaco",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "quilleco": {
    "comuna": "Quilleco",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "san rosendo": {
    "comuna": "San Rosendo",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "santa bárbara": {
    "comuna": "Santa Bárbara",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "tucapel": {
    "comuna": "Tucapel",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "yumbel": {
    "comuna": "Yumbel",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "alto biobío": {
    "comuna": "Alto Biobío",
    "provincia": "Biobío",
    "region": "Región del Biobío"
  },
  "bulnes": {
    "comuna": "Bulnes",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "chillán": {
    "comuna": "Chillán",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "chillán viejo": {
    "comuna": "Chillán Viejo",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "el carmen": {
    "comuna": "El Carmen",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "pemuco": {
    "comuna": "Pemuco",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "pinto": {
    "comuna": "Pinto",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "quillón": {
    "comuna": "Quillón",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "san ignacio": {
    "comuna": "San Ignacio",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "yungay": {
    "comuna": "Yungay",
    "provincia": "Diguillín",
    "region": "Región del Ñuble"
  },
  "cobquecura": {
    "comuna": "Cobquecura",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "coelemu": {
    "comuna": "Coelemu",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "ninhue": {
    "comuna": "Ninhue",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "portezuelo": {
    "comuna": "Portezuelo",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "quirihue": {
    "comuna": "Quirihue",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "ránquil": {
    "comuna": "Ránquil",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "treguaco": {
    "comuna": "Treguaco",
    "provincia": "Itata",
    "region": "Región del Ñuble"
  },
  "coihueco": {
    "comuna": "Coihueco",
    "provincia": "Punilla",
    "region": "Región del Ñuble"
  },
  "ñiquén": {
    "comuna": "Ñiquén",
    "provincia": "Punilla",
    "region": "Región del Ñuble"
  },
  "san carlos": {
    "comuna": "San Carlos",
    "provincia": "Punilla",
    "region": "Región del Ñuble"
  },
  "san fabián": {
    "comuna": "San Fabián",
    "provincia": "Punilla",
    "region": "Región del Ñuble"
  },
  "san nicolas": {
    "comuna": "San Nicolas",
    "provincia": "Punilla",
    "region": "Región del Ñuble"
  },
  "temuco": {
    "comuna": "Temuco",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "carahu": {
    "comuna": "Carahu",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "cunco": {
    "comuna": "Cunco",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "curarrehue": {
    "comuna": "Curarrehue",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "freire": {
    "comuna": "Freire",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "galvarin": {
    "comuna": "Galvarin",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "gorbea": {
    "comuna": "Gorbea",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "lautaro": {
    "comuna": "Lautaro",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "loncoche": {
    "comuna": "Loncoche",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "melipeuco": {
    "comuna": "Melipeuco",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "nueva imperial": {
    "comuna": "Nueva Imperial",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "padre las casa": {
    "comuna": "Padre las Casa",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "perquenco": {
    "comuna": "Perquenco",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "pitrufquén": {
    "comuna": "Pitrufquén",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "pucó": {
    "comuna": "Pucó",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "saavedra": {
    "comuna": "Saavedra",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "teodoro schmid": {
    "comuna": "Teodoro Schmid",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "toltén": {
    "comuna": "Toltén",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "vilcún": {
    "comuna": "Vilcún",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "villarrica": {
    "comuna": "Villarrica",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "cholchol": {
    "comuna": "Cholchol",
    "provincia": "Cautín",
    "region": "Región de la Araucanía"
  },
  "angol": {
    "comuna": "Angol",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "collipulli": {
    "comuna": "Collipulli",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "curacautín": {
    "comuna": "Curacautín",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "ercilla": {
    "comuna": "Ercilla",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "lonquimay": {
    "comuna": "Lonquimay",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "los sauces": {
    "comuna": "Los Sauces",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "lumaco": {
    "comuna": "Lumaco",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "purén": {
    "comuna": "Purén",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "renaico": {
    "comuna": "Renaico",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "traiguén": {
    "comuna": "Traiguén",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "victoria": {
    "comuna": "Victoria",
    "provincia": "Malleco",
    "region": "Región de la Araucanía"
  },
  "valdivia": {
    "comuna": "Valdivia",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "corral": {
    "comuna": "Corral",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "lanco": {
    "comuna": "Lanco",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "los lagos": {
    "comuna": "Los Lagos",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "máfil": {
    "comuna": "Máfil",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "mariquina": {
    "comuna": "Mariquina",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "paillaco": {
    "comuna": "Paillaco",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "panguipulli": {
    "comuna": "Panguipulli",
    "provincia": "Valdivia",
    "region": "Región de los Ríos"
  },
  "la unión": {
    "comuna": "La Unión",
    "provincia": "Ranco",
    "region": "Región de los Ríos"
  },
  "futrono": {
    "comuna": "Futrono",
    "provincia": "Ranco",
    "region": "Región de los Ríos"
  },
  "lago ranco": {
    "comuna": "Lago Ranco",
    "provincia": "Ranco",
    "region": "Región de los Ríos"
  },
  "río bueno": {
    "comuna": "Río Bueno",
    "provincia": "Ranco",
    "region": "Región de los Ríos"
  },
  "puerto montt": {
    "comuna": "Puerto Montt",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "calbuco": {
    "comuna": "Calbuco",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "cochamó": {
    "comuna": "Cochamó",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "fresia": {
    "comuna": "Fresia",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "frutillar": {
    "comuna": "Frutillar",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "los muermos": {
    "comuna": "Los Muermos",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "llanquihue": {
    "comuna": "Llanquihue",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "maullín": {
    "comuna": "Maullín",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "puerto varas": {
    "comuna": "Puerto Varas",
    "provincia": "Llanquihue",
    "region": "Región de los Lagos"
  },
  "castro": {
    "comuna": "Castro",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "ancud": {
    "comuna": "Ancud",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "chonchi": {
    "comuna": "Chonchi",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "curaco de vélez": {
    "comuna": "Curaco de Vélez",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "dalcahue": {
    "comuna": "Dalcahue",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "puqueldón": {
    "comuna": "Puqueldón",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "queilén": {
    "comuna": "Queilén",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "quellón": {
    "comuna": "Quellón",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "quemchi": {
    "comuna": "Quemchi",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "quinchao": {
    "comuna": "Quinchao",
    "provincia": "Chiloé",
    "region": "Región de los Lagos"
  },
  "osorno": {
    "comuna": "Osorno",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "puerto octay": {
    "comuna": "Puerto Octay",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "purranque": {
    "comuna": "Purranque",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "puyehue": {
    "comuna": "Puyehue",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "río negro": {
    "comuna": "Río Negro",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "san juan de la costa": {
    "comuna": "San Juan de la Costa",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "san pablo": {
    "comuna": "San Pablo",
    "provincia": "Osorno",
    "region": "Región de los Lagos"
  },
  "chaitén": {
    "comuna": "Chaitén",
    "provincia": "Palena",
    "region": "Región de los Lagos"
  },
  "futaleufú": {
    "comuna": "Futaleufú",
    "provincia": "Palena",
    "region": "Región de los Lagos"
  },
  "hualaihué": {
    "comuna": "Hualaihué",
    "provincia": "Palena",
    "region": "Región de los Lagos"
  },
  "palena": {
    "comuna": "Palena",
    "provincia": "Palena",
    "region": "Región de los Lagos"
  },
  "coyhaique": {
    "comuna": "Coyhaique",
    "provincia": "Coyhaique",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "lago verde": {
    "comuna": "Lago Verde",
    "provincia": "Coyhaique",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "aisén": {
    "comuna": "Aisén",
    "provincia": "Aysén",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "cisnes": {
    "comuna": "Cisnes",
    "provincia": "Aysén",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "guaitecas": {
    "comuna": "Guaitecas",
    "provincia": "Aysén",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "cochrane": {
    "comuna": "Cochrane",
    "provincia": "Capitán Pratt",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "o’higgins": {
    "comuna": "O’Higgins",
    "provincia": "Capitán Pratt",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "tortel": {
    "comuna": "Tortel",
    "provincia": "Capitán Pratt",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "chile chico": {
    "comuna": "Chile Chico",
    "provincia": "General Carrera",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "río ibáñez": {
    "comuna": "Río Ibáñez",
    "provincia": "General Carrera",
    "region": "Región Aisén del Gral. Carlos Ibañez del Campo"
  },
  "punta arenas": {
    "comuna": "Punta Arenas",
    "provincia": "Magallanes",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "laguna blanca": {
    "comuna": "Laguna Blanca",
    "provincia": "Magallanes",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "río verde": {
    "comuna": "Río Verde",
    "provincia": "Magallanes",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "san gregorio": {
    "comuna": "San Gregorio",
    "provincia": "Magallanes",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "cabo de hornos (ex. navarino)": {
    "comuna": "Cabo de Hornos (Ex. Navarino)",
    "provincia": "Antártica Chilena",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "antártica": {
    "comuna": "Antártica",
    "provincia": "Antártica Chilena",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "porvenir": {
    "comuna": "Porvenir",
    "provincia": "Tierra del Fuego",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "primavera": {
    "comuna": "Primavera",
    "provincia": "Tierra del Fuego",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "timaukel": {
    "comuna": "Timaukel",
    "provincia": "Tierra del Fuego",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "natales": {
    "comuna": "Natales",
    "provincia": "Última Esperanza",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "torres del paine": {
    "comuna": "Torres del Paine",
    "provincia": "Última Esperanza",
    "region": "Región de Magallanes y de la Antártica Chilena"
  },
  "santiago": {
    "comuna": "Santiago",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "cerrillos": {
    "comuna": "Cerrillos",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "cerro navia": {
    "comuna": "Cerro Navia",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "conchalí": {
    "comuna": "Conchalí",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "el bosque": {
    "comuna": "El Bosque",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "estación central": {
    "comuna": "Estación Central",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "huechuraba": {
    "comuna": "Huechuraba",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "independencia": {
    "comuna": "Independencia",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "la cisterna": {
    "comuna": "La Cisterna",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "la florida": {
    "comuna": "La Florida",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "la granja": {
    "comuna": "La Granja",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "la pintana": {
    "comuna": "La Pintana",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "la reina": {
    "comuna": "La Reina",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "las condes": {
    "comuna": "Las Condes",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "lo barnechea": {
    "comuna": "Lo Barnechea",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "lo espejo": {
    "comuna": "Lo Espejo",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "lo prado": {
    "comuna": "Lo Prado",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "macul": {
    "comuna": "Macul",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "maipú": {
    "comuna": "Maipú",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "ñuñoa": {
    "comuna": "Ñuñoa",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "pedro aguirre cerda": {
    "comuna": "Pedro Aguirre Cerda",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "peñalolén": {
    "comuna": "Peñalolén",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "providencia": {
    "comuna": "Providencia",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "pudahuel": {
    "comuna": "Pudahuel",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "quilicura": {
    "comuna": "Quilicura",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "quinta normal": {
    "comuna": "Quinta Normal",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "recoleta": {
    "comuna": "Recoleta",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "renca": {
    "comuna": "Renca",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "san joaquín": {
    "comuna": "San Joaquín",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "san miguel": {
    "comuna": "San Miguel",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "san ramón": {
    "comuna": "San Ramón",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "vitacura": {
    "comuna": "Vitacura",
    "provincia": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  "puente alto": {
    "comuna": "Puente Alto",
    "provincia": "Cordillera",
    "region": "Región Metropolitana de Santiago"
  },
  "pirque": {
    "comuna": "Pirque",
    "provincia": "Cordillera",
    "region": "Región Metropolitana de Santiago"
  },
  "san josé de maipo": {
    "comuna": "San José de Maipo",
    "provincia": "Cordillera",
    "region": "Región Metropolitana de Santiago"
  },
  "colina": {
    "comuna": "Colina",
    "provincia": "Chacabuco",
    "region": "Región Metropolitana de Santiago"
  },
  "lampa": {
    "comuna": "Lampa",
    "provincia": "Chacabuco",
    "region": "Región Metropolitana de Santiago"
  },
  "tiltil": {
    "comuna": "Tiltil",
    "provincia": "Chacabuco",
    "region": "Región Metropolitana de Santiago"
  },
  "san bernardo": {
    "comuna": "San Bernardo",
    "provincia": "Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  "buin": {
    "comuna": "Buin",
    "provincia": "Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  "calera de tango": {
    "comuna": "Calera de Tango",
    "provincia": "Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  "paine": {
    "comuna": "Paine",
    "provincia": "Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  "melipilla": {
    "comuna": "Melipilla",
    "provincia": "Mellipilla",
    "region": "Región Metropolitana de Santiago"
  },
  "alhué": {
    "comuna": "Alhué",
    "provincia": "Mellipilla",
    "region": "Región Metropolitana de Santiago"
  },
  "curacaví": {
    "comuna": "Curacaví",
    "provincia": "Mellipilla",
    "region": "Región Metropolitana de Santiago"
  },
  "maría pinto": {
    "comuna": "María Pinto",
    "provincia": "Mellipilla",
    "region": "Región Metropolitana de Santiago"
  },
  "san pedro": {
    "comuna": "San Pedro",
    "provincia": "Mellipilla",
    "region": "Región Metropolitana de Santiago"
  },
  "talagante": {
    "comuna": "Talagante",
    "provincia": "Talagante",
    "region": "Región Metropolitana de Santiago"
  },
  "el monte": {
    "comuna": "El Monte",
    "provincia": "Talagante",
    "region": "Región Metropolitana de Santiago"
  },
  "isla de maipo": {
    "comuna": "Isla de Maipo",
    "provincia": "Talagante",
    "region": "Región Metropolitana de Santiago"
  },
  "padre hurtado": {
    "comuna": "Padre Hurtado",
    "provincia": "Talagante",
    "region": "Región Metropolitana de Santiago"
  },
  "peñaflor": {
    "comuna": "Peñaflor",
    "provincia": "Talagante",
    "region": "Región Metropolitana de Santiago"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHILE_TERRITORIO, CHILE_FLAT_COMMUNES };
} else {
  window.CHILE_TERRITORIO = CHILE_TERRITORIO;
  window.CHILE_FLAT_COMMUNES = CHILE_FLAT_COMMUNES;
}
