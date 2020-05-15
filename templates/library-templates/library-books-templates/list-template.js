const LibraryBooksListTemplate = `
<div>
	<section class="content-header">
	    		<h1>
	            Books List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Books List</a></li>
	        </ol>
	</section>

	<!-- Main content -->
	    <section class="content">
	    	<!--<div class="content-header">
	    		<h1>
	            Books List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Books List</a></li>
	        </ol>
	    	</div>-->
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box">
	                    <div class="box-header">
	                        <div style="text-align: center;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add Books</a> </div>

		                	<!-- createModal-content-start -->

		                	<div class="modal fade" id="modal-default-create" v-if="createModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title">Add Book</h4>
					              </div>
					              	<div class="modal-body">
						                <div class="form-group">
			                            <label class="required-field">Book's Name &nbsp</label>
			                            <input  class="form-control" placeholder="Please enter book's name" v-model="fromInput.name">
	                        		</div>
									<div class="form-group">
		                            <label class="required-field">Branch &nbsp</label>
			                            <select class="form-control" v-model="fromInput.branches_id">
			                            	<option disabled>Select Branch</option>
			                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
			                            </select>
		                    		</div>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-primary" @click="createBook(); createModal= false;" data-dismiss="modal">Submit</button>
					              </div>
					            </div>
					          </div>				          
					        </div>
		                <!-- /.createModal-content-end -->

						<!-- editModal-content-start -->

		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title">Edit {{clickedBook.lbNname}}</h4>
					              </div>
					              <div class="modal-body">
					                <div class="form-group">
			                            <label class="required-field">Book's Name &nbsp</label>
			                            <input  class="form-control" placeholder="Please enter book's name" v-model="clickedBook.name" >
		                        	</div>

			                        <div class="form-group">
		                            <label class="required-field">Branch &nbsp</label>
			                            <select class="form-control" v-model="clickedBook.branches_id">
			                            	<option disabled>Select Branch</option>
			                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
			                            </select>
		                    		</div>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-primary" @click="updateBook(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title">{{clickedBook.name}} will be deleted.</h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="deleteBook()">Yes! Delete!</button>
					              </div>
					            </div>
					            <!-- /.modal-content -->
					          </div>
					          <!-- /.modal-dialog -->
					        </div>

							<!-- /.deleteModal-content-end -->

	                    </div>
	                    <!-- /.box-header -->

	                    <div class="box-body">

	                            <table id="example1" class="table table-bordered table-striped">

	                                <thead>
	                                <tr>
	                                    <th scope="col">SL</th>
	                                    <th scope="col">Action</th>
	                                    <th scope="col">Name</th>
	                                    <th scope="col">Branch</th>
	                                    <th scope="col">Created_At</th>
	                                    <th scope="col">Updated_At</th>
	                                </tr>
	                                </thead>
	                                <tbody>
											<tr v-for="(book,i) in books">
		                                        <td>{{i+1}}.</td>
		                                        <td nowarp>
		                                        	<a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil"  @click="editModal = true; selectBook(book)" ></a>
		                                    		<a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; selectBook(book)"></a>
		                                        </td>
		                                        <td>{{book.name}}</td>
		                                        <td>{{book.bName}}</td>
		                                        <td>{{book.created_at}}</td>
	                                        	<td>{{book.updated_at}}</td>
	                                    	</tr>
	                                    <!--<tr v-for="(book,i) in books">
	                                        <td>{{i+1}}.</td>
	                                        <td nowarp>
	                                        	<a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil"  @click="editModal = true; selectBook(book)" ></a>
	                                    		<a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; selectBook(book)"></a>
	                                        </td>
	                                        <td>{{book.name}}</td>
	                                        <td>{{book.branches_id}}</td>
	                                    </tr>-->

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


export default LibraryBooksListTemplate