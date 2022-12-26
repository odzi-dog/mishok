module profile {
    type Profile {
        required property username -> str {
            constraint exclusive;
            constraint min_len_value(5);
            constraint max_len_value(35);

            # Only letters and underscores are allowed
            constraint regexp(r'([A-Za-z]|_)*');
        };
        index on (.username);
        
        optional property name -> str;
        required multi link liked -> content::Post;
        required multi link tags -> ScoredTag;
        optional multi link devices -> Device;
    };

    type ScoredTag {
        required link tag -> content::Tag;
        property score -> decimal {
            default := 0;
        };
    };

    type Device {
        # Device type
        scalar type Type extending enum<PHONE, COMPUTER, OTHER>;

        required property type -> Type;
        property availableSpace -> decimal {
            default := 0;
        };
    };
}