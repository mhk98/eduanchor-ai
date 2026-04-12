import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw`

    <div id="main-wrapper">



        <div class="offcanvas-menu">
       <div class="offcanvas-menu-overlay"></div>
       <div class="container">
           <div class="row" style="margin-top:-1px;">
               <div class="col-md-12">
                   <div class="offcanvas-wrapper">
                       <div class="offcanvas-inner">
                           <a href="https://www.eductrl.com" class="logo">
                               <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width: 60%;">
                           </a>
                           <p style="color:#000;margin-bottom: 0px;">EduCtrl is a feature-rich cloud-based software to
                               manage all aspects of Overseas Education Consultancy Business, Training/Coaching
                               Institutions.</p>
                           <div class="row">
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-phone3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>+91-924-213-7092</h3>
                                           <p style="color:#000;">Give us a call</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-envelope3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>info@eductrl.com</h3>
                                           <p style="color:#000;">Drop us email</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                           </div>
                           <!-- End Contact Row -->
                           <div class="footer-social-link">
                               <ul>
                                   <li><a target="_blank" href="https://fb.me/eductrlcrm"><i
                                               class="fa fa-facebook"></i></a></li>
                                   <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                                   <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i
                                               class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>

                                   <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                           <li><a href="#"><i class="fa fa-instagram"></i></a></li> -->
                               </ul>
                           </div>

                       </div>
                       <!-- Offcanvas inner end -->
                       <button class="menu-close-btn"><i class="fa fa-close" style="color:#000;"></i></button>
                   </div>
                   <!-- Offcanvas wrapper end -->
               </div>
               <!-- Col End -->
           </div>
           <!-- Row End -->
       </div>
       <!-- Container End -->
   </div>


   <div class="modal fade" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel"
       aria-hidden="true">
       <div class="modal-dialog" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <h5 class="modal-title" id="enquiryModalLabel" style="font-weight:500;">Request Demo</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
                   <div id="thankYouDiv" style="border-radius: 8px; display:none;">

                       <div class=" text-center">
                           <h2 class="modal-title w-100 mb-0"
                               style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #333;">Thank You!
                           </h2>
                       </div>

                       <div class="p-4 text-center">
                           <p class="lead mb-4" style="font-size: 1.1rem; color: #555;">
                               Our team will be in touch shortly to arrange your personalized demo. In the meantime,
                               feel free to
                               explore our live software demo:
                           </p>
                           <a href="https://demo.eductrl.com/cn4" class="text-primary font-weight-bold" target="_blank"
                               style="font-size: 1rem;">https://demo.eductrl.com/cn4</a>
                           <div class="mt-4 text-start mx-auto" style="max-width: 400px;">
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Admin Login:</strong>
                                   admin@demo.com / 123456
                               </p>
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Student Login:</strong>
                                   student@demo.com /
                                   123456</p>
                               <p style="font-size: 0.95rem;"><strong>Staff Login:</strong> staff@demo.com / 123456</p>
                           </div>
                       </div>
                   </div>
                   <div id="formDiv">
                       <p>Share your details to access Software Demo</p>
                                              <form id="enquiry-form" class="contact-form" method="POST" action="#"
                           onsubmit="return false;">
                           <input type="hidden" name="_token" value="Of8RdBbIDXqsArfxE8DOBq4YEAkU5cwN9XiPyi0V">                           <div class="error-container"></div>
                           <div class="row">
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="name" id="name" placeholder="Your Name *"
                                           type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="business" id="business"
                                           placeholder="Business Name *" type="text" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-email" name="email" id="email"
                                           placeholder="Email *" type="email" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-phone" name="phone" id="phone"
                                           placeholder="Phone *" type="phone" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="city" id="city"
                                           placeholder="City *" type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="country" id="country" required="">
                                           <option value="">Country *</option>
                                                                                          <option value="Afghanistan">Afghanistan</option>
                                                                                          <option value="Albania">Albania</option>
                                                                                          <option value="Algeria">Algeria</option>
                                                                                          <option value="American Samoa">American Samoa</option>
                                                                                          <option value="Andorra">Andorra</option>
                                                                                          <option value="Angola">Angola</option>
                                                                                          <option value="Anguilla">Anguilla</option>
                                                                                          <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                                                                          <option value="Argentina">Argentina</option>
                                                                                          <option value="Armenia">Armenia</option>
                                                                                          <option value="Aruba">Aruba</option>
                                                                                          <option value="Australia">Australia</option>
                                                                                          <option value="Austria">Austria</option>
                                                                                          <option value="Azerbaijan">Azerbaijan</option>
                                                                                          <option value="Bahamas The">Bahamas The</option>
                                                                                          <option value="Bahrain">Bahrain</option>
                                                                                          <option value="Bangladesh">Bangladesh</option>
                                                                                          <option value="Barbados">Barbados</option>
                                                                                          <option value="Belarus">Belarus</option>
                                                                                          <option value="Belgium">Belgium</option>
                                                                                          <option value="Belize">Belize</option>
                                                                                          <option value="Benin">Benin</option>
                                                                                          <option value="Bermuda">Bermuda</option>
                                                                                          <option value="Bhutan">Bhutan</option>
                                                                                          <option value="Bolivia">Bolivia</option>
                                                                                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                                          <option value="Botswana">Botswana</option>
                                                                                          <option value="Brazil">Brazil</option>
                                                                                          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                                          <option value="Brunei">Brunei</option>
                                                                                          <option value="Bulgaria">Bulgaria</option>
                                                                                          <option value="Burkina Faso">Burkina Faso</option>
                                                                                          <option value="Burundi">Burundi</option>
                                                                                          <option value="Cambodia">Cambodia</option>
                                                                                          <option value="Cameroon">Cameroon</option>
                                                                                          <option value="Canada">Canada</option>
                                                                                          <option value="Cape Verde">Cape Verde</option>
                                                                                          <option value="Cayman Islands">Cayman Islands</option>
                                                                                          <option value="Central African Republic">Central African Republic</option>
                                                                                          <option value="Chad">Chad</option>
                                                                                          <option value="Chile">Chile</option>
                                                                                          <option value="China">China</option>
                                                                                          <option value="Christmas Island">Christmas Island</option>
                                                                                          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                                          <option value="Colombia">Colombia</option>
                                                                                          <option value="Comoros">Comoros</option>
                                                                                          <option value="Cook Islands">Cook Islands</option>
                                                                                          <option value="Costa Rica">Costa Rica</option>
                                                                                          <option value="Cote D&#039;Ivoire (Ivory Coast)">Cote D&#039;Ivoire (Ivory Coast)</option>
                                                                                          <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                                                                          <option value="Cuba">Cuba</option>
                                                                                          <option value="Cyprus">Cyprus</option>
                                                                                          <option value="Czech Republic">Czech Republic</option>
                                                                                          <option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option>
                                                                                          <option value="Denmark">Denmark</option>
                                                                                          <option value="Djibouti">Djibouti</option>
                                                                                          <option value="Dominica">Dominica</option>
                                                                                          <option value="Dominican Republic">Dominican Republic</option>
                                                                                          <option value="East Timor">East Timor</option>
                                                                                          <option value="Ecuador">Ecuador</option>
                                                                                          <option value="Egypt">Egypt</option>
                                                                                          <option value="El Salvador">El Salvador</option>
                                                                                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                                          <option value="Eritrea">Eritrea</option>
                                                                                          <option value="Estonia">Estonia</option>
                                                                                          <option value="Ethiopia">Ethiopia</option>
                                                                                          <option value="External Territories of Australia">External Territories of Australia</option>
                                                                                          <option value="Falkland Islands">Falkland Islands</option>
                                                                                          <option value="Faroe Islands">Faroe Islands</option>
                                                                                          <option value="Fiji Islands">Fiji Islands</option>
                                                                                          <option value="Finland">Finland</option>
                                                                                          <option value="France">France</option>
                                                                                          <option value="French Guiana">French Guiana</option>
                                                                                          <option value="French Polynesia">French Polynesia</option>
                                                                                          <option value="Gabon">Gabon</option>
                                                                                          <option value="Gambia The">Gambia The</option>
                                                                                          <option value="Georgia">Georgia</option>
                                                                                          <option value="Germany">Germany</option>
                                                                                          <option value="Ghana">Ghana</option>
                                                                                          <option value="Gibraltar">Gibraltar</option>
                                                                                          <option value="Greece">Greece</option>
                                                                                          <option value="Greenland">Greenland</option>
                                                                                          <option value="Grenada">Grenada</option>
                                                                                          <option value="Guadeloupe">Guadeloupe</option>
                                                                                          <option value="Guam">Guam</option>
                                                                                          <option value="Guatemala">Guatemala</option>
                                                                                          <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                                                                          <option value="Guinea">Guinea</option>
                                                                                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                                          <option value="Guyana">Guyana</option>
                                                                                          <option value="Haiti">Haiti</option>
                                                                                          <option value="Honduras">Honduras</option>
                                                                                          <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                                                                          <option value="Hungary">Hungary</option>
                                                                                          <option value="Iceland">Iceland</option>
                                                                                          <option value="India">India</option>
                                                                                          <option value="Indonesia">Indonesia</option>
                                                                                          <option value="Iran">Iran</option>
                                                                                          <option value="Iraq">Iraq</option>
                                                                                          <option value="Ireland">Ireland</option>
                                                                                          <option value="Israel">Israel</option>
                                                                                          <option value="Italy">Italy</option>
                                                                                          <option value="Jamaica">Jamaica</option>
                                                                                          <option value="Japan">Japan</option>
                                                                                          <option value="Jersey">Jersey</option>
                                                                                          <option value="Jordan">Jordan</option>
                                                                                          <option value="Kazakhstan">Kazakhstan</option>
                                                                                          <option value="Kenya">Kenya</option>
                                                                                          <option value="Kiribati">Kiribati</option>
                                                                                          <option value="Korea North">Korea North</option>
                                                                                          <option value="Korea South">Korea South</option>
                                                                                          <option value="Kuwait">Kuwait</option>
                                                                                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                                          <option value="Laos">Laos</option>
                                                                                          <option value="Latvia">Latvia</option>
                                                                                          <option value="Lebanon">Lebanon</option>
                                                                                          <option value="Lesotho">Lesotho</option>
                                                                                          <option value="Liberia">Liberia</option>
                                                                                          <option value="Libya">Libya</option>
                                                                                          <option value="Liechtenstein">Liechtenstein</option>
                                                                                          <option value="Lithuania">Lithuania</option>
                                                                                          <option value="Luxembourg">Luxembourg</option>
                                                                                          <option value="Macau S.A.R.">Macau S.A.R.</option>
                                                                                          <option value="Macedonia">Macedonia</option>
                                                                                          <option value="Madagascar">Madagascar</option>
                                                                                          <option value="Malawi">Malawi</option>
                                                                                          <option value="Malaysia">Malaysia</option>
                                                                                          <option value="Maldives">Maldives</option>
                                                                                          <option value="Mali">Mali</option>
                                                                                          <option value="Malta">Malta</option>
                                                                                          <option value="Man (Isle of)">Man (Isle of)</option>
                                                                                          <option value="Marshall Islands">Marshall Islands</option>
                                                                                          <option value="Martinique">Martinique</option>
                                                                                          <option value="Mauritania">Mauritania</option>
                                                                                          <option value="Mauritius">Mauritius</option>
                                                                                          <option value="Mayotte">Mayotte</option>
                                                                                          <option value="Mexico">Mexico</option>
                                                                                          <option value="Micronesia">Micronesia</option>
                                                                                          <option value="Moldova">Moldova</option>
                                                                                          <option value="Monaco">Monaco</option>
                                                                                          <option value="Mongolia">Mongolia</option>
                                                                                          <option value="Montserrat">Montserrat</option>
                                                                                          <option value="Morocco">Morocco</option>
                                                                                          <option value="Mozambique">Mozambique</option>
                                                                                          <option value="Myanmar">Myanmar</option>
                                                                                          <option value="Namibia">Namibia</option>
                                                                                          <option value="Nauru">Nauru</option>
                                                                                          <option value="Nepal">Nepal</option>
                                                                                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                                          <option value="Netherlands The">Netherlands The</option>
                                                                                          <option value="New Caledonia">New Caledonia</option>
                                                                                          <option value="New Zealand">New Zealand</option>
                                                                                          <option value="Nicaragua">Nicaragua</option>
                                                                                          <option value="Niger">Niger</option>
                                                                                          <option value="Nigeria">Nigeria</option>
                                                                                          <option value="Niue">Niue</option>
                                                                                          <option value="Norfolk Island">Norfolk Island</option>
                                                                                          <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                                          <option value="Norway">Norway</option>
                                                                                          <option value="Oman">Oman</option>
                                                                                          <option value="Pakistan">Pakistan</option>
                                                                                          <option value="Palau">Palau</option>
                                                                                          <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                                                                          <option value="Panama">Panama</option>
                                                                                          <option value="Papua new Guinea">Papua new Guinea</option>
                                                                                          <option value="Paraguay">Paraguay</option>
                                                                                          <option value="Peru">Peru</option>
                                                                                          <option value="Philippines">Philippines</option>
                                                                                          <option value="Poland">Poland</option>
                                                                                          <option value="Portugal">Portugal</option>
                                                                                          <option value="Puerto Rico">Puerto Rico</option>
                                                                                          <option value="Qatar">Qatar</option>
                                                                                          <option value="Republic Of The Congo">Republic Of The Congo</option>
                                                                                          <option value="Reunion">Reunion</option>
                                                                                          <option value="Romania">Romania</option>
                                                                                          <option value="Russia">Russia</option>
                                                                                          <option value="Rwanda">Rwanda</option>
                                                                                          <option value="Saint Helena">Saint Helena</option>
                                                                                          <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                                                                          <option value="Saint Lucia">Saint Lucia</option>
                                                                                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                                          <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                                                                          <option value="Samoa">Samoa</option>
                                                                                          <option value="San Marino">San Marino</option>
                                                                                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                                          <option value="Saudi Arabia">Saudi Arabia</option>
                                                                                          <option value="Senegal">Senegal</option>
                                                                                          <option value="Serbia">Serbia</option>
                                                                                          <option value="Seychelles">Seychelles</option>
                                                                                          <option value="Sierra Leone">Sierra Leone</option>
                                                                                          <option value="Singapore">Singapore</option>
                                                                                          <option value="Slovakia">Slovakia</option>
                                                                                          <option value="Slovenia">Slovenia</option>
                                                                                          <option value="Smaller Territories of the UK">Smaller Territories of the UK</option>
                                                                                          <option value="Solomon Islands">Solomon Islands</option>
                                                                                          <option value="Somalia">Somalia</option>
                                                                                          <option value="South Africa">South Africa</option>
                                                                                          <option value="South Sudan">South Sudan</option>
                                                                                          <option value="Spain">Spain</option>
                                                                                          <option value="Sri Lanka">Sri Lanka</option>
                                                                                          <option value="Sudan">Sudan</option>
                                                                                          <option value="Suriname">Suriname</option>
                                                                                          <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                                                                          <option value="Swaziland">Swaziland</option>
                                                                                          <option value="Sweden">Sweden</option>
                                                                                          <option value="Switzerland">Switzerland</option>
                                                                                          <option value="Syria">Syria</option>
                                                                                          <option value="Taiwan">Taiwan</option>
                                                                                          <option value="Tajikistan">Tajikistan</option>
                                                                                          <option value="Tanzania">Tanzania</option>
                                                                                          <option value="Thailand">Thailand</option>
                                                                                          <option value="Togo">Togo</option>
                                                                                          <option value="Tokelau">Tokelau</option>
                                                                                          <option value="Tonga">Tonga</option>
                                                                                          <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                                                                          <option value="Tunisia">Tunisia</option>
                                                                                          <option value="Turkey">Turkey</option>
                                                                                          <option value="Turkmenistan">Turkmenistan</option>
                                                                                          <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                                                                          <option value="Tuvalu">Tuvalu</option>
                                                                                          <option value="Uganda">Uganda</option>
                                                                                          <option value="Ukraine">Ukraine</option>
                                                                                          <option value="United Arab Emirates">United Arab Emirates</option>
                                                                                          <option value="United Kingdom">United Kingdom</option>
                                                                                          <option value="United States">United States</option>
                                                                                          <option value="Uruguay">Uruguay</option>
                                                                                          <option value="Uzbekistan">Uzbekistan</option>
                                                                                          <option value="Vanuatu">Vanuatu</option>
                                                                                          <option value="Venezuela">Venezuela</option>
                                                                                          <option value="Vietnam">Vietnam</option>
                                                                                          <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                                                          <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                                                                          <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                                                                          <option value="Western Sahara">Western Sahara</option>
                                                                                          <option value="Yemen">Yemen</option>
                                                                                          <option value="Yugoslavia">Yugoslavia</option>
                                                                                          <option value="Zambia">Zambia</option>
                                                                                          <option value="Zimbabwe">Zimbabwe</option>
                                                                                  </select>
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="interested_in"
                                           id="interested_in" required="">
                                           <option value="">Interested In *</option>
                                           <option value="Consultancy">Consultancy CRM</option>
                                           <option value="Coaching">Coaching CRM</option>
                                           
                                       </select>
                                   </div>
                               </div>

                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <textarea class="form-control" name="message" id="message" placeholder="Enquiry or message" rows="3"></textarea>
                                   </div>
                               </div>
                               <!-- Col 12 end -->

                           </div>
                           <!-- Form row end -->
                           <div class="text-center">
                               <button id="enquiry-form-submit" class="btn btn-dark tw-mt-10">Submit</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>

   </div>
        <div class="tw-top-bar tw-top-bar-angle bg-offwhite mbv-none">
      <div class="container">
         <div class="row">
            <div class="col-md-8 text-left">
               <div class="top-contact-info">                 
                  <span><i class="icon icon-phone3"></i>+91-924-213-7092</span>
                <span><i class="icon icon-envelope"></i>info@eductrl.com</span>
               </div>
            </div>
            <!-- Col End -->
            <div class="col-md-4 ml-auto text-right">
               <div class="top-social-links">
                  <span>Follow us:</span>
                  <a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a>
                  <a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a>

                  <!-- <a href="#"><i class="fa fa-google-plus"></i></a> -->
                  <a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a> 
               </div>
            </div>
            <!-- Col End -->
         </div>
         <!-- Row End -->
      </div>
      <!-- Container End -->
   </div>

        <header>
    

    <div class="tw-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-new-blue p-2">
                <a class="navbar-brand tw-nav-brand header-size" href="https://www.eductrl.com">
                    <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" class="header-logo-size">
                </a>
                <!-- End of Navbar Brand -->
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- End of Navbar toggler -->
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com">Home</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Products
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 500px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/consultancy">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Consultancy CRM</p>
                                            <p class="text-muted p-0 m-0 mt-2">CRM software for study abroad consultancy</p>
                                        </a>
                                    </div>
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/coaching">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Coaching CRM</p>
                                            <p class="text-muted p-0 m-0 mt-2">Coaching institute management software</p>
                                        </a>
                                    </div>
                                    <div class="col-6 hover-scale p-3">
                                        <a href="https://www.eductrl.com/eductrl-cms">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">EduCtrl CMS</p>
                                            <p class="text-muted p-0 m-0 mt-2">Website builder for study abroad agency</p>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link p-2" href="https://www.eductrl.com/pricing">Pricing</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Resources
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 350px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-12 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/knowledgebase">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Knowledgebase</p>
                                            <p class="text-muted p-0 m-0 mt-2">
                                                Help articles and guides to use EduCtrl CRM
                                            </p>
                                        </a>
                                    </div>
                                    <div class="col-12 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/blog">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Blog</p>
                                            <p class="text-muted p-0 m-0 mt-2">
                                                Insights and updates on CRM and the education industry
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/about">About Us</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/contact">Contact</a></li>

                        <li class="text-center mt-2 d-md-none d-sm-block">
                            <button class="btn btn-dark" data-toggle="modal" data-target="#enquiryModal"
                                style="padding: 10px 20px;margin-right: 25px;">Request Free Demo</button><br>
                            <hr>
                            <div class="d-flex flex-column align-items-center">
                                <div class="contact-buttons justify-content-center mb-2 nav-link">
                                    <a href="tel:+919242137092" class="mx-1 p-1 text-dark" title="Call">
                                        <b class="fa fa-phone"></b> +91-9242137092
                                    </a>
                                    <a href="mailto:info@eductrl.com" class="text-dark p-1 mx-1" title="Email">
                                        <b class="fa fa-envelope"></b> info@eductrl.com
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="tw-offcanvas-menu d-none d-md-block">
                    <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal"
                        style="padding: 10px 20px;margin-right: 25px;">Free Demo</button>
                    <div class="tw-menu-bar inline-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <style>
        .offer-bar {
            background: linear-gradient(90deg, #7B2FF7, #7807f1ff);
            font-weight: 600;
            font-size: 0.95rem;
            position: relative;
            z-index: 1050;
        }

        .offer-btn {
            background-color: #ffca2c;
            border-radius: 25px;
            padding: 4px 12px;
            color: #000 !important;
            text-decoration: none;
            font-weight: 700;
            margin-left: 8px;
            transition: all 0.3s ease;
        }

        .offer-btn:hover {
            background-color: #ffd84a;
            transform: scale(1.05);
        }

        .hover-scale {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
            box-shadow: 0 2px 5px rgba(59, 58, 58, 0.2);
            background-color: #f8f9fa;
            border-left: 3px solid #525252;
            border-radius: 5px;
        }

        #tw-megamenu {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: #fff;
        }
    </style>
</header>

        <div id="banner-area" class="banner-area" style="background-image:url(https://www.eductrl.com/images/banner/banner5.jpg)">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="banner-heading">
                    <h1 class="banner-title text-white">Blog</h1>
                    
                </div>
            </div>
            <!-- Col end -->
        </div>
        <!-- Row end -->
    </div>
    <!-- Container end -->
</div>

<section id="main-container" class="main-container" style="padding-top:0;margin-bottom:100px;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-9 mt-5">
                        <div class="container-fluid m-t-10">
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/managing-multi-country-offices-challenges-and-solutions">Managing Multi-Country Offices: Challenges and Solutions</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Managing Multi-Country Offices_ Challenges and Solutions_._1773826629.jpg"  />
                                                                
                                <p class=""><p>Managing offices across multiple countries can feel like juggling flaming torches—exciting but fraught with potential pitfalls. As businesses expand globally, leaders often face a myriad of challenges that can impact productivity and cohesion.</p><p>Operating in different countries means navigating various cultures, regulations, and communication styles. For example, a company with offices in both Germany and Brazil may struggle with time zone differences and varying approaches to teamwork.</p><p>Key challenges include:</p><ol><li data-list="bullet"><strong>Cultural Misunderstandings</strong>: Different work ethics and communication styles can lead to friction.</li><li data-list="bullet"><strong>Regulatory Compliance</strong>: Each country has its own labor laws, which can complicate HR practices.</li><li data-list="bullet"><strong>Technology Integration</strong>: Ensuring that all offices use compatible systems is crucial for seamless operations.</li></ol><p>To thrive, organizations must adopt strategic solutions tailored to their unique circumstances. Pro tip: Regularly conduct cross-cultural training sessions to enhance team dynamics and foster mutual understanding. By addressing these challenges head-on, companies can create a harmonious and productive multi-country environment.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/managing-multi-country-offices-challenges-and-solutions" role="button">Read More</a>
                                </div>
                            </div>
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/should-you-niche-down-benefits-of-specializing-in-specific-destinations-or-courses">Should You Niche Down? Benefits of Specializing in Specific Destinations or Courses</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Should You Niche Down Benefits of Specializing in Specific Destinations or Courses_1773731064.png"  />
                                                                
                                <p class=""><p>In a world overflowing with options, standing out can feel overwhelming. But what if, instead of trying to appeal to everyone, you focused on a niche that truly excites you?</p><p>Specializing in specific destinations or courses can transform your business from one of many to a preferred choice. This strategy enables you to cater to distinct audiences and foster deeper connections. For instance, a travel agency that specializes in eco-tourism in Costa Rica may attract environmentally conscious travelers, while an online course platform focusing exclusively on graphic design can build a loyal following among aspiring designers.</p><p><strong>Benefits of niching down include:</strong></p><ol><li data-list="bullet"><strong>Increased authority</strong> in your field.</li><li data-list="bullet"><strong>Targeted marketing efforts</strong> that resonate.</li><li data-list="bullet"><strong>Stronger brand identity</strong> and recognition.</li></ol><p>Pro tip: Research your competition and identify gaps in the market to carve out your niche effectively. By honing in on a specific area, you not only simplify your offerings but also amplify your impact. As you read on, you’ll discover how focusing your efforts can lead to greater success and satisfaction.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/should-you-niche-down-benefits-of-specializing-in-specific-destinations-or-courses" role="button">Read More</a>
                                </div>
                            </div>
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/why-youtube-is-a-game-changer-for-study-abroad-marketing-here-s-how-to-start">Why YouTube Is a Game-Changer for Study Abroad Marketing – Here&#039;s How to Start</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Why YouTube Is a Game-Changer for Study Abroad Marketing – Here&#039;s How to Start_. (1)_1773120372.jpg"  />
                                                                
                                <p class=""><p>In a world where visual storytelling reigns supreme, YouTube stands out as a platform that can transform how educational institutions promote study abroad programs. With over <strong>2 billion monthly active users</strong>, it’s a treasure trove for reaching a global audience eager for authentic experiences.</p><p>Educational marketing has evolved, and students today crave real-life insights into potential study abroad destinations. This is where YouTube shines, allowing universities to showcase:</p><ol><li data-list="bullet"><strong>Student testimonials</strong>: Real stories resonate more than traditional marketing.</li><li data-list="bullet"><strong>Campus tours</strong>: Virtual sightseeing can spark interest instantly.</li><li data-list="bullet"><strong>Cultural immersion</strong>: Highlighting local customs and traditions enriches the experience.</li></ol><p>For instance, a university's video featuring students sharing their transformative journeys abroad garnered <strong>50,000 views</strong> in a month. The comments section buzzed with excitement and inquiries, proving the power of relatable content.</p><p>To harness YouTube effectively, focus on creating engaging, high-quality videos that answer potential students' questions and highlight unique program features. Consider leveraging keywords and descriptions to enhance discoverability, as <strong>SEO strategies</strong> can significantly boost your reach.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/why-youtube-is-a-game-changer-for-study-abroad-marketing-here-s-how-to-start" role="button">Read More</a>
                                </div>
                            </div>
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/study-abroad-marketing-campaigns-essential-do-s-and-don-ts-for-success">Study Abroad Marketing Campaigns: Essential Do’s and Don’ts for Success</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Study Abroad Marketing Campaigns Essential Do’s and Don’ts for Success_1772785179.png"  />
                                                                
                                <p class=""><p>In an increasingly globalized world, the allure of studying abroad continues to capture the imagination of students everywhere. With more options than ever, educational institutions must craft compelling marketing campaigns to stand out in a crowded marketplace.</p><p>Effective study abroad marketing goes beyond traditional methods. It requires a strategic approach that resonates with students’ aspirations and addresses their concerns. For instance, a campaign that highlights <a href="https://www.eductrl.com/blog/case-studies-successful-social-media-campaigns-by-study-abroad-agencies"><strong>real student experiences</strong></a> can foster genuine connections and inspire action.</p><p>Consider the successful campaign launched by the University of California, which featured video testimonials from recent alumni. This approach not only showcased the benefits of studying abroad but also built trust through authentic storytelling.</p><p>As you navigate the complexities of promoting an international education program, keep these essential do’s and don’ts in mind to maximize your impact:</p><ol><li data-list="bullet"><strong>Do</strong> leverage social media to engage potential students.</li><li data-list="bullet"><strong>Don’t</strong> rely solely on print brochures—consider digital formats that appeal to tech-savvy audiences.</li></ol><p>By incorporating these strategies, you can create a marketing campaign that not only attracts attention but also drives results.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/study-abroad-marketing-campaigns-essential-do-s-and-don-ts-for-success" role="button">Read More</a>
                                </div>
                            </div>
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/why-conversational-marketing-is-a-game-changer-for-study-abroad-agencies">Why Conversational Marketing is a Game-Changer for Study Abroad Agencies</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Why Conversational Marketing is a Game-Changer for Study Abroad Agencies_1772623155.png"  />
                                                                
                                <p class=""><p>In a world where instant communication is the norm, traditional marketing methods can feel outdated. <i>Conversational marketing</i> is changing the landscape, offering a more interactive approach that resonates with today's prospective students.</p><p>As study abroad agencies compete for attention in a crowded market, harnessing the power of conversations can be a game-changer. why:</p><ol><li data-list="bullet"><strong>Personalization</strong>: Prospects crave tailored experiences. Conversational marketing allows agencies to engage students with personalized interactions based on their interests and goals.</li><li data-list="bullet"><strong>Real-time Engagement</strong>: Immediate responses can help alleviate concerns and answer questions, making the decision-making process smoother.</li><li data-list="bullet"><strong>Building Trust</strong>: Authentic conversations foster relationships and trust, crucial for agencies aiming to guide students in their journeys abroad.</li></ol><p>For instance, a recent case study revealed that a <a href="https://www.eductrl.com/study-abroad/what-do-study-abroad-agencies-charge-for-their-services"><strong>study abroad agency</strong></a> that integrated chatbots on their website saw a 40% increase in inquiries within the first month.</p><p><strong>Pro Tip</strong>: Utilize tools like live chat or social media messaging to create seamless communication channels. By embracing this innovative marketing strategy, agencies can significantly enhance their outreach and support for students.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/why-conversational-marketing-is-a-game-changer-for-study-abroad-agencies" role="button">Read More</a>
                                </div>
                            </div>
                                                        <div class="row mt-5">
                                <div class="col-12">
                                    <h3><a href="https://www.eductrl.com/blog/franchise-vs-independent-what-model-works-best-for-study-abroad-consulting">Franchise vs. Independent: What Model Works Best for Study Abroad Consulting?</a></h3>
                                </div>
                            </div>
                            <div class="row eductrl-editor-content ck-content" style="padding:15px;">
                                                                <img src="https://www.eductrl.com/storage/cms/Franchise vs. Independent What Model Works Best for Study Abroad Consulting_1772535807.png"  />
                                                                
                                <p class=""><p>Choosing between a franchise and an independent model can be a pivotal decision for those venturing into study abroad consulting. With the global education market booming—projected to reach over $340 billion by 2025—understanding the nuances of each option is crucial for success.</p><p>Franchise opportunities often come with established branding, training programs, and a built-in customer base. This can lead to quicker profitability, as seen in franchises like &nbsp;Agency/consultancy, which reported 30% growth in their first two years.</p></p>
                                <div style="margin-bottom:30px">
                                    <a class="btn btn-primary" href="https://www.eductrl.com/blog/franchise-vs-independent-what-model-works-best-for-study-abroad-consulting" role="button">Read More</a>
                                </div>
                            </div>
                                            
                            <div class="row ">
                                <div class="col-sm-12 ">
                                    <nav>
        <ul class="pagination">
            
                            <li class="page-item disabled" aria-disabled="true">
                    <span class="page-link">&laquo; Previous</span>
                </li>
            
            
                            <li class="page-item">
                    <a class="page-link" href="https://www.eductrl.com/blog?page=2" rel="next">Next &raquo;</a>
                </li>
                    </ul>
    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 mt-5 rounded" style="background-color: rgb(247,249,248);">
                        <h3 class="mt-3">Also Read</h3>
                        <span class="animate-border tw-mb-40 tw-mt-20"></span>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/boosting-student-enrollment-how-to-maximize-conversion-opportunities" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> Boosting Student Enrollment: How to Maximize Conversion Opportunities</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/5-essential-questions-to-ask-students-while-advising-courses" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> 5 Essential Questions to Ask Students While Advising Courses</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/how-a-higher-education-crm-can-boost-enrollments-in-the-uae" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> How a Higher Education CRM Can Boost Enrollments in the UAE</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/higher-education-crm-vs-manual-processes" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> Higher Education CRM vs. Manual Processes: Why Automation is the Key to Successful International Student Recruitment</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/how-to-launch-a-high-converting-lead-magnet-for-study-abroad-leads" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> How to Launch a High-Converting Lead Magnet for Study Abroad Leads</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/how-admission-software-is-improving-efficiency-and-accessibility-in-higher-education" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> How Admission Software is Improving Efficiency and Accessibility in Higher Education</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/why-edtech-crms-are-essential-for-learning-businesses" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> Why EdTech CRMs Are Essential for Learning Businesses</a></h6>
                            </div>
                        </div>
                                                <div class="row mt-4">
                            <div class="col-12">
                                
                                <h6><a href="https://www.eductrl.com/blog/how-personalized-video-content-can-boost-your-student-recruitment-efforts" class="text-dark"><i class="bi bi-arrow-right text-dark"></i> How Personalized Video Content Can Boost Your Student Recruitment Efforts</a></h6>
                            </div>
                        </div>
                                            </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <a href="https://wa.me/919242137092?text=Hi, I'm Interested in EduCtrl"
            className="fixed-bottomRight  whatsappIcon" >
            <img src="https://www.eductrl.com/images/whatsapp.png" alt="icon" class="fixed-bottomRight whatsappIcon" loading="lazy">
        </a>
                    <footer id="tw-footer" class="tw-footer">
   <div class="container">
      <div class="row">
         <div class="col-md-12 col-lg-4">
            <div class="tw-footer-info-box">
               <a href="https://www.eductrl.com" class="footer-logo">
                  <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width:220px;">
               </a>
               <p class="footer-info-text" style="font-size: 14px;line-height: 24px;">
                  Running an Education Consultancy/ Coaching business involves various activities. You need a good & powerful software system to manage your business more efficiently & provide good services to your students.<br /><br />EduCtrl Software is the perfect, affordable solution for your business.
               </p>
               <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                     <li><a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a></li>
                     <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                     <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                     <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>
                  </ul>
               </div>
               <!-- End Social link -->
            </div>
            <!-- End Footer info -->

         </div>
         <!-- End Col -->
         <div class="col-md-12 col-lg-8">
            <div class="row mt-30">
               <div class="col-md-6">
                  <div class="contact-us">
                     <div class="contact-icon">
                        <i class="icon icon-envelope3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3>info@eductrl.com</h3>
                        <p>Mail Us</p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
               <!-- End Col -->
               <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                     <div class="contact-icon">
                        <i class="icon icon-phone3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3 style="display:flex;">+91-9242137092</h3>
                        <p style="display: flex;">Call or Whatsapp<br>
                         </p>
                       <p style="display:flex;justify-content: center;">
                          <a class="footer-icon"  href="https://wa.me/+919242137092"><i class="fa fa-whatsapp" aria-hidden="true" style="    font-size: 30px;"></i></a> &nbsp;&nbsp;&nbsp;
                           <a class="footer-icon" href="tel:+919242137092"><i class="fa fa-phone-square" aria-hidden="true" style="    font-size: 30px;"></i></a>
                       </p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
              
               <!-- End Col -->
                </div>

               
            <!-- End Contact Row -->
            <div class="row">
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                     <div class="section-heading">
                        <h3>Useful Links</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <ul>
                        <li><a href="https://www.eductrl.com/consultancy">Consultancy CRM</a></li>
                        <li><a href="https://www.eductrl.com/coaching">Coaching CRM</a></li>
                        <li><a href="https://www.eductrl.com/eductrl-cms">Website Builder</a></li>
                        <li><a href="https://www.eductrl.com/pricing">Pricing</a></li>
                        <li><a href="https://www.eductrl.com/faq">FAQ</a></li>
                     </ul>
                     <ul>
                        <li><a href="https://www.eductrl.com/about">About Us</a></li>
                        <li><a href="https://www.eductrl.com/blog">Blog</a></li>
                        <li><a href="https://www.eductrl.com/contact">Contact us</a></li>
                        <li><a href="https://www.eductrl.com/affiliates">Affiliates</a></li>
                        <li><a href="https://www.eductrl.com/offers">Offers</a></li>
                     </ul>
                  </div>
                  <!-- End Footer Widget -->
               </div>
               <!-- End col -->
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget">
                     <div class="section-heading">
                        <h3>Subscribe</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <p style="">Don't miss to subscribe to our news feeds, kindly fill the form below.</p>
                     <form action="#" onsubmit="return false;">
                        <div class="form-row">
                           <div class="col tw-footer-form">
                              <input id="newsletter_email" type="email" class="form-control" placeholder="Email Address">
                              <button id="newsletter-form-btn" type="submit"><i class="fa fa-send"></i></button>
                           </div>
                        </div>
                     </form>
                     <!-- End form -->
                  </div>
                  <!-- End footer widget -->
               </div>
               <!-- End Col -->
               <div class="col-md-12 col-lg-6 mt-4">
                  <div class="footer-widget footer-left-widget">
                     <a href="https://www.eductrl.com/study-abroad">Study Abroad</a> | 
                     <a href="https://www.eductrl.com/education-tech">Education Tech</a>
                  </div>
                  <!-- End Footer Widget -->
               </div>
            </div>
            <!-- End Row -->
         </div>
         <!-- End Col -->
      </div>
      <!-- End Widget Row -->
   </div>
   <!-- End Contact Container -->

   <div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <span>&copy; 2026, All Right Reserved. SASH INFO SERVICES PVT LTD. GSTN: 29AATCS8855R1ZR</span>
            </div>
            <!-- End Col -->
            <div class="col-md-5">
                <div class="copyright-menu">
                    <ul>
                        <li><a href="https://www.eductrl.com/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://www.eductrl.com/refund-policy">Refund Policy</a></li>
                        <li><a href="https://www.eductrl.com/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <!-- End col -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End Copyright Container -->
</div>
<!-- End Copyright -->

<!-- Back to top -->
<div id="back-to-top" class="back-to-top">
    <button class="btn btn-dark" title="Back to Top">
        <i class="fa fa-angle-up" style="color:#fff;"></i>
    </button>
</div>
<!-- End Back to top -->
</footer>

            </div><!-- #app -->


    <!-- Scripts -->
    
    <script src="https://www.eductrl.com/assets/plugins/jquery/jquery.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/popper.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/bootstrap.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sparkline/jquery.sparkline.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/select2/dist/js/select2.full.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/raphael/raphael-min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/morrisjs/morris.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/styleswitcher/jQuery.style.switcher.js" defer></script>
    <script src="https://www.eductrl.com/js/owl-carousel.2.3.0.min.js" defer></script>
    <script src="https://www.eductrl.com/js/waypoints.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.counterup.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.magnific.popup.js" defer></script>
    <script src="https://www.eductrl.com/js/wow.min.js" defer></script>
    <script src="https://www.eductrl.com/js/smoothscroll.js" defer></script>
    <script src="https://www.eductrl.com/js/main.js" defer></script>

    
<script src="https://www.google.com/recaptcha/api.js?render=6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH"></script>

<script>
    (function initRecaptchaForms() {
        function run() {
            if (typeof jQuery === 'undefined') {
                setTimeout(run, 50);
                return;
            }
            jQuery(document).ready(function() {
        var sitekey = '6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH';

        function validateEmail(email) {
            if (email.length < 6)
                return false;
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            return emailReg.test(email);
        }

        $('#contact-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'contact_submit'
                }).then(function(token) {

                    var name = $("#c_name").val();
                    var email = $("#c_email").val();
                    var phone = $("#c_phone").val();
                    var subject = $("#c_subject").val();
                    var message = $("#c_message").val();

                    $("#returnmessage").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#contact-form-btn").attr("disabled", true);
                        $("#contact-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/contact/send", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_subject: subject,
                            c_message: message,
                            source: 'contact form',
                            captcha_token: token,
                            _token: "Of8RdBbIDXqsArfxE8DOBq4YEAkU5cwN9XiPyi0V"
                        }, function(data) {
                            $("#contact-form-btn").attr("disabled", false);
                            $("#contact-form-btn").val('SEND');
                            if (data == '1') {
                                $("#contact-form").trigger("reset");
                                $("#returnmessage").html("<span style='color:#047c12;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });

        $('#eductrl-cms-form-btn').click(function() {
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'eductrl_cms_submit'
                }).then(function(token) { 

                    var name = $("#form_name").val();
                    var email = $("#form_email").val();
                    var phone = $("#form_phone").val();
                    var message = $("#form_message").val();

                    $("#l").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#eductrl-cms-form-btn").attr("disabled", true);
                        $("#eductrl-cms-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/eductrl-cms/send-message", {
                            form_name: name,
                            form_email: email,
                            form_phone: phone,
                            form_message: message,
                            source: 'eductrl_cms_form',
                            captcha_token: token,
                            _token: "Of8RdBbIDXqsArfxE8DOBq4YEAkU5cwN9XiPyi0V"
                        }, function(data) {
                            $("#eductrl-cms-form-btn").attr("disabled", false);
                            $("#eductrl-cms-form-btn").val('Send Message');
                            if (data == '1') {
                                $("#eductrl-form").trigger("reset");
                                $("#returnmessage1").html("<span style='color:#fff;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage1").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });



        $('#enquiry-form-submit').click(function() {
            const thankYouDiv = document.getElementById('thankYouDiv');
            const formDiv = document.getElementById('formDiv');
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'enquiry_submit'
                }).then(function(token) {

                    var name = $("#name").val();
                    var email = $("#email").val();
                    var phone = $("#phone").val();
                    var business = $("#business").val();
                    var city = $("#city").val();
                    var country = $("#country").val();
                    var interested_in = $("#interested_in").val();
                    var message = $("#message").val();

                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || business == '' || city == '' || country == '' || interested_in == '') {
                        //console.log("Form values:" + name + "|" + email + "|" + phone + "|" + business + "|" + city);
                        alert('Please fill all required fields');
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#enquiry-form-submit").attr("disabled", true);
                        $("enquiry-form-submit").val('Sending...');
                        $.post("https://www.eductrl.com/send-enquiry", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_business: business,
                            c_city: city,
                            c_country: country,
                            c_interested_in: interested_in,
                            c_message: message,
                            source: 'enquiry form',
                            captcha_token: token,
                            _token: "Of8RdBbIDXqsArfxE8DOBq4YEAkU5cwN9XiPyi0V",
                        }, function(data) {
                            if (data == '1') {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                // formDiv.style.display = 'none';
                                // thankYouDiv.style.display = 'block';

                                // ✅ Redirect to a success page after short delay (optional)
                                window.location.href = "https://www.eductrl.com/thank-you-req-demo";
                            } else {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                $('#enquiryModal').modal('toggle');
                                alert("Error occured. Please use alternative contact method.");
                            }
                        });
                    }

                });
            });
        });



        $('#newsletter-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'newsletter_submit'
                }).then(function(token) {

                    var email = $("#newsletter_email").val();

                    // Checking for blank fields.
                    if (email == '') {
                        alert("Please enter email id");
                    } else if (!validateEmail(email)) {
                        alert("Please enter valid email id");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $.post("https://www.eductrl.com/newsletter-subscribe", {
                            c_email: email,
                            source: 'newsletter form',
                            captcha_token: token,
                            _token: "Of8RdBbIDXqsArfxE8DOBq4YEAkU5cwN9XiPyi0V"
                        }, function(data) {
                            if (data == '1') {
                                $("#newsletter-form").trigger("reset");
                                alert("Thanks! You have subscribed!");
                            } else {
                                alert("Oops! Something went wrong.");
                            }
                        });
                    }

                });
            });
        });



            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }
    })();
</script>

    <style>
    .pagination{
        justify-content: center;
    }
    .pagination li{
        margin-left: 5px !important;
    }
    .pagination li a{
        line-height: 20px !important;
        border-radius: 0px !important;
        height: 36.5px !important;
        width: 120px !important;
        border-radius: 5px !important;
        border-color: rgb(220, 220, 219);
    }
    .ck-content .image img{
        height: auto !important;
    }

</style>
        <!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M85SFMLP"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->


    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '607839048127874');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=607839048127874&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->

	<script type="text/javascript">
	_linkedin_partner_id = "7318036";
	window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
	window._linkedin_data_partner_ids.push(_linkedin_partner_id);
	</script><script type="text/javascript">
	(function(l) {
	if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
	window.lintrk.q=[]}
	var s = document.getElementsByTagName("script")[0];
	var b = document.createElement("script");
	b.type = "text/javascript";b.async = true;
	b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
	s.parentNode.insertBefore(b, s);})(window.lintrk);
	</script>
	<noscript>
	<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7318036&fmt=gif" />
	</noscript>

	<script type="text/javascript">
	var sc_project=12775076; 
	var sc_invisible=1; 
	var sc_security="9e105de8"; 
	</script>
	<script type="text/javascript"
	src="https://www.statcounter.com/counter/counter.js"
	async></script>
	<noscript><div class="statcounter"><a title="web counter"
	href="https://statcounter.com/" target="_blank"><img
	class="statcounter"
	src="https://c.statcounter.com/12775076/0/9e105de8/1/"
	alt="web counter"
	referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>


	
`;

export function BlogCloneContent() {
  return (
    <div
      className="eductrl-clone-page"
      dangerouslySetInnerHTML={{ __html: normalizeCloneHtml(rawHtml) }}
    />
  );
}
