module default {
    # 
    # Profile-related
    # 

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
        required multi link tags -> profile::ScoredTag;
        optional multi link devices -> profile::Device;
    };

    # 
    # Post types
    # 
    type Image extending content::Post {
        required property images -> array<str>;
    };

    type Video extending content::Post {
        required property url -> str;
    };

    type Story extending content::Post {};
};
