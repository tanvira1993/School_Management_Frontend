const LibraryBookLocationListTemplate = `
<div>
	<section class="content-header">
	    	<h1>
	            Book Location's List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Book Location's List</a></li>
	        </ol>
	</section>
	<!-- Main content -->
	    <section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box" style="border-top-color: #605ca8 !important">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" style="background-color: #605ca8 !important" @click="createPage()""><b>&nbsp Add Book's Location</b></a> </div>
	                       
							<!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit {{clickedBookLocation.lbName}} Book location </b></h4>
					              </div>
					              <div class="modal-body">
		                            <div class="form-group">
                                		<label class="required-field">Branch &nbsp</label>
                                		<input class="form-control" v-model="clickedBookLocation.bName" disabled>
                            		</div>
                            		<div class="form-group">
                                		<label class="required-field">Category &nbsp</label>
                                		<input class="form-control" v-model="clickedBookLocation.lbcName" disabled>
                            		</div>
                            		<div class="form-group">
                                		<label class="required-field">Book &nbsp</label>
                                		<input class="form-control" v-model="clickedBookLocation.lbName" disabled>
                            		</div>
		                            <div class="form-group">
		                                <label class="required-field">Quantity &nbsp</label>
		                                <input type="number" class="form-control" @change="quantityValue()" placeholder="Please enter quantity of book" v-model="clickedBookLocation.quantity">
		                            </div>
		                            <div class="form-group">
		                                <label class="required-field">Reserved &nbsp</label>
		                                <input type="number" class="form-control" @change="reservedBooks();reservedValue()" placeholder="Please enter quantity of book" v-model="clickedBookLocation.reserved">
		                            </div>
		                            <div class="form-group">
		                                <label class="required-field">Bookshelves &nbsp</label>
		                                <select :disabled="booksheleves.length == 0" class="form-control" v-model="clickedBookLocation.library_bookshelves_id" @change="findBookshelvesRow()">
		                                    <option :value="null" disabled selected>Select Bookshelves</option>
		                                    <option v-for="booksheleve in booksheleves" v-bind:value="booksheleve.id">{{ booksheleve.name }}</option>
		                                </select>
		                            </div>
		                            <!--<div class="form-group">
		                                <label class="required-field">Rows &nbsp</label>
		                                <select class="form-control select2" v-model="clickedBookLocation.shelves_no" multiple="multiple">
		                                    <option disabled selected>Select Rows no</option>
		                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
		                                </select>
		                            </div>-->
		                            <div class="form-group">
		                                <label class="required-field">Start Rows &nbsp</label>
		                                <select class="form-control" v-model="clickedBookLocation.start_shelves_no">
		                                    <option disabled selected>Select Rows no</option>
		                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
		                                </select>
		                            </div>

		                            <div class="form-group">
		                                <label class="required-field">End Rows &nbsp</label>
		                                <select class="form-control" v-model="clickedBookLocation.end_shelves_no" @change="shelvesValidationChk()">
		                                    <option disabled selected>Select Rows no</option>
		                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
		                                </select>
		                            </div>
   
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" v-bind:class="{ 'disabled': disbutton,}" class="btn btn-sm btn-primary" style="background-color: #605ca8 !important" @click="updateBookLocation(); editModal= false;" data-dismiss="modal">Update</button>
					              </div>
					            </div>
					          </div>				          
					        </div>
							<!-- /.editModal-content-end -->
							<!-- deleteModal-content-start -->
							<div class="modal modal-danger fade" id="modal-danger" v-if="deleteModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>{{clickedBookLocation.lbName}} Book location will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="deleteBookLocation()">Yes! Delete!</button>
					              </div>
					            </div>
					            <!-- /.modal-content -->
					          </div>
					          <!-- /.modal-dialog -->
					        </div>
							<!-- /.deleteModal-content-end -->
	                    </div>
	                    <!-- /.box-header -->
	                    <div class="box-body table-responsive no-padding">
	                            <table id="example1" class="table table-bordered table-striped">
	                                <thead>
	                                <tr>
	                                    <th scope="col">SL</th>
	                                    <th scope="col">Categories</th>
	                                    <th scope="col">Books</th>
	                                    <th scope="col">Bookshelves</th>
	                                    <th scope="col">Rows</th>
	                                    <th scope="col">Quantities</th>
	                                    <th scope="col">Reserved</th>
	                                    <th scope="col">Available</th>
	                                    <th scope="col">Actions</th>
	                                </tr>
	                                </thead>
	                                <tbody>
										<tr v-for="(bookLocation,i) in bookLocations">
	                                        <td>{{i+1}}.</td>
	                                        <td>{{bookLocation.lbcName}}</td>
	                                        <td>{{bookLocation.lbName}}</td>
	                                        <td>{{bookLocation.lbsName}}</td>
	                                        <td v-if="bookLocation.start_shelves_no == bookLocation.end_shelves_no">{{bookLocation.start_shelves_no}}</td>
	                                        <td v-else >{{bookLocation.start_shelves_no}}-{{bookLocation.end_shelves_no}}</td>
	                                        <td>{{bookLocation.quantity}}</td>
	                                        <td>{{bookLocation.reserved}}</td>
	                                        <td>{{bookLocation.available}}</td>
	                                        <td nowarp>
	                                        	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-edit"  @click="editModal = true; selectBookLocation(bookLocation)" ></div></span>
	                                    		<span class="badge bg-red"><div data-toggle="modal" data-target="#modal-danger"  class="fa fa-trash" @click="deleteModal= true; selectBookLocation(bookLocation)"></div></span>
	                                        </td>
                                    	</tr>
	                                </tbody>
	                            </table>
	                    </div>
	                </div>
	                <!-- /.box -->
	            </div>
	            <!-- /.col -->
	        </div>
	        <!-- /.row -->
	    </section>
    </div>
`


export default LibraryBookLocationListTemplate