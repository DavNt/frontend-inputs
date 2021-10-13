import React, {Component} from 'react';
import Phoneic from '../resources/icons/ic_local_phone_black_36dp.png';
import Lockic from '../resources/icons/ic_lock_outline_black_36dp.png';

export default class InputSec extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 bg_grey">
            <div className="row mx-5 mt-4 mb-5 fw-bold">
              <p>
                <span className="dev_color">Dev</span>Challenges.io
              </p>
            </div>
            <div className="row mx-4 my-3">Colors</div>
            <div className="row mx-4 my-3">Typography</div>
            <div className="row mx-4 my-3">Spaces</div>
            <div className="row mx-4 my-3">Buttons</div>
            <div className="row mx-4 my-3 fw-bold">Inputs</div>
            <div className="row mx-4 my-3">Grid</div>
          </div>

          <div className="col-sm-9">
            <h3 className="m-4 mt-5">Inputs</h3>
            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field hov" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label blck-txt"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field blck-input" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label blu-txt"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field blu-input" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label error-txt"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field error-input" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label blck-txt "
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field blck-input " 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label error-txt"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field error-input " 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field" 
                  id="textbox1" 
                  placeholder="Placeholder"
                  disabled
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field hov" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
                <small className="">Interesting text</small>
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label error-txt"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field error-input" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
                <small className="error-txt">Interesting text</small>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3 ">
                  <label
                  for="textbox1" 
                  className="form-label"
                  >
                    Label
                  </label><br/>
                  <div className="input-group">
                    <i class=" ic-add">
                      <img 
                        src={Phoneic} 
                        alt="" 
                        className="img-reponsive icon-img"
                      />
                    </i>
                    <input 
                      type="text" className="input_field txt_indent hov" 
                      id="textbox1" 
                      placeholder="Placeholder"
                    />
                  </div>
                </div>
              <div className="col-sm-2 m-3 ms-5">
                  <label
                  for="textbox1" 
                  className="form-label"
                  >
                    Label
                  </label><br/>
                  <div className="input-group">
                    <input 
                      type="text" className="input_field hov" 
                      id="textbox1" 
                      placeholder="Placeholder"
                    />
                    <i class=" ic-add ">
                      <img 
                        src={Lockic} 
                        alt="" 
                        className="img-reponsive icon-img ic_right"
                      />
                    </i>
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field hov" 
                  id="textbox1" 
                  value="Text"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" 
                  className="input_field form-control-sm hov" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-sm-2 m-3 ms-5">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" 
                  className="input_field form-control-md hov" 
                  id="textbox1" 
                  placeholder="Placeholder"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <input 
                  type="text" className="input_field full_width hov" 
                  id="textbox1" 
                  value="Text"
                />
              </div>
            </div>

            <div className="row">
            <div className="col-sm-2 m-3">
                <label
                 for="textbox1" 
                 className="form-label"
                >
                  Label
                </label><br/>
                <textarea 
                  type="text" className="input_field hov" 
                  id="textbox1" 
                  placeholder="Placeholder"
                  rows="3"
                />
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-light light_hover">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-primary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-secondary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-danger">Default</button>
              </div>
            </div>
 */}
          </div>
        </div>
      </div>
    )
  }
}