CREATE MIGRATION m1spqx6z6ivrwdglo2256ejao2jsqjc67m7dw3hqktusfcn6n3nxna
    ONTO m16smqiffrfejvy3augh3t5gv6entzyigx3h46sbvcsmsajdtgc6cq
{
  CREATE MODULE content IF NOT EXISTS;
  CREATE MODULE profile IF NOT EXISTS;
  CREATE SCALAR TYPE content::Type EXTENDING enum<IMAGE, VIDEO, STORY>;
  CREATE ABSTRACT TYPE content::Post {
      CREATE REQUIRED PROPERTY type -> content::Type;
  };
  CREATE TYPE default::Image EXTENDING content::Post {
      CREATE REQUIRED PROPERTY images -> array<std::str>;
  };
  CREATE TYPE default::Story EXTENDING content::Post;
  CREATE TYPE default::Video EXTENDING content::Post {
      CREATE REQUIRED PROPERTY url -> std::str;
  };
  CREATE SCALAR TYPE profile::DeviceType EXTENDING enum<PHONE, COMPUTER, OTHER>;
  CREATE TYPE profile::Device {
      CREATE PROPERTY availableSpace -> std::decimal {
          SET default := 0;
      };
      CREATE REQUIRED PROPERTY type -> profile::DeviceType;
  };
  CREATE TYPE content::Tag {
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  CREATE TYPE profile::ScoredTag {
      CREATE REQUIRED LINK tag -> content::Tag;
      CREATE PROPERTY score -> std::decimal {
          SET default := 0;
      };
  };
  CREATE TYPE default::Profile {
      CREATE REQUIRED MULTI LINK liked -> content::Post;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(35);
          CREATE CONSTRAINT std::min_len_value(5);
          CREATE CONSTRAINT std::regexp('([A-Za-z]|_)*');
      };
      CREATE INDEX ON (.username);
      CREATE OPTIONAL MULTI LINK devices -> profile::Device;
      CREATE REQUIRED MULTI LINK tags -> profile::ScoredTag;
      CREATE OPTIONAL PROPERTY name -> std::str;
  };
};
