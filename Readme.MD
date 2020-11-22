### Readme 
Working on tutorial and npm deployment... 



# Components

## Map
| props | Description | Required |
|-|-|-|
| apiKey | google maps api key | true |
| style | style of the map | true |
| options | Map options |  |
| children | <Marker/> etc.  |  |

## Marker
| props | Description | Required  |
|-|-|-|
| postion | in format {lat:Number ,lng:Number} | true |
| markerKey | manditory marker key for children rendering  | true |
| markerOptions | supports google maps marker options, can use a callback function |  |
| type | Marker type, will be used |  |
| children | Children rendered inside infoWindow |  |

The markerKey is used as the ID for the infowindow. 

### Reason for this library 
Why do we need or want another google maps component library?
    -> intuitive uses hooks
    -> extensible using redux, will write guide on this
    -> beginner friendly
    -> jsx in google maps markers

Can effectivly add and remove map markers with just a useState hook

