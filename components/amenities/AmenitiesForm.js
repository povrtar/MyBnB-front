import React from'react';
import {connect} from 'react-redux';
import GetAmenities from '../../actions/GetAmenities';
import CheckBox from '../CheckBox';
class AmenitiesForm extends React.Component{
    constructor (props){
        super(props);
        this.state={
          apartmentId: this.props.match.params.id,
            amenities:[],
            checkboxes: props.amenities.reduce(
                (options, option) => ({
                  ...options,
                  [option]: false
                }),
                {}
              )
        }
    }

    componentDidMount() {
        this.getData();
      }
      getData(){
        this.props.getAmenities(); 
      }

      handleFormSubmit = (e) => {
        e.preventDefault();
    let amenities=[];
        Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            console.log(checkbox, "is selected.");
             let amenity=(this.props.amenities).find((amenity)=>{return (amenity.name==checkbox)});
            amenities.push(amenity);
            this.props.onSubmit({amenities})
          });
         
      };
      
      handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
         
        }));
      };
      createCheckbox = option => (
        <CheckBox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={(e)=>this.handleCheckboxChange(e)}
          key={option}
        />
      );
    
      createCheckboxes = () => this.props.amenities.map(this.createCheckbox);
      render(){
          return(
<div>
<form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
              <button type="submit" className="btn btn-primary">
              Save Amenities
            </button>
              </div>
            </form>
</div>
          );
      }
    
}
const mapStateToProps = (state,props) => {
    console.log(state.amenities);
    return { amenities: state.amenitiesList
     };
  };
  
  export default connect(mapStateToProps, {
    getAmenities: GetAmenities
  
  })(AmenitiesForm);