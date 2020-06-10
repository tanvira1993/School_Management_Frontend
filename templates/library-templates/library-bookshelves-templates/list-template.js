const LibraryBookshelvesListTemplate = `
<div>
	<section class="content-header">
	    		<h1>
	            Bookshelves's List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Bookshelves's List</a></li>
	        </ol>
	</section>
	<!-- Main content -->
	    <section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box" style="border-top-color: #605ca8 !important">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" style="background-color: #605ca8 !important" @click="createPage()""><b>&nbsp Add Bookshelves</b></a> </div>
	                       
							<!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit {{clickedBookshelves.name}} Bookshelves </b></h4>
					              </div>
					              <div class="modal-body">
					                <div class="form-group">
			                            <label class="required-field">Name &nbsp</label>
			                            <input  class="form-control" placeholder="Please enter bookshelves's name" v-model="clickedBookshelves.name" >
		                        	</div>
		                        	<div class="form-group">
			                            <label class="required-field">Rows &nbsp</label>
			                            <input type="number"  class="form-control" placeholder="Please enter bookshelves's no of rows" v-model="clickedBookshelves.quantity" @change="quantityValue()">
		                        	</div>
			                        <div class="form-group">
		                            <label class="required-field">Branch &nbsp</label>
			                            <select class="form-control" v-model="clickedBookshelves.branches_id">
			                            	<option disabled>Select Branch</option>
			                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
			                            </select>
		                    		</div>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button v-bind:class="{ 'disabled': disbutton,}" type="button" class="btn btn-sm btn-primary" style="background-color: #605ca8 !important" @click="updateBookshelves(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title"><b>{{clickedBookshelves.name}} Category will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="deleteBookshelves()">Yes! Delete!</button>
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
	                                    <th scope="col">Name</th>
	                                    <th scope="col">Rows</th>
	                                    <th scope="col">Branch</th>
	                                    <th scope="col">Action</th>
	                                </tr>
	                                </thead>
	                                <tbody>
											<tr v-for="(bookshelves,i) in bookshelveses">
		                                        <td>{{i+1}}.</td>
		                                        <td>{{bookshelves.name}}</td>
		                                        <td>{{bookshelves.quantity}}</td>
		                                        <td>{{bookshelves.bName}}</td>
		                                        <td nowarp>
		                                        	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-edit"  @click="editModal = true; selectBookshelves(bookshelves)" ></div></span>
		                                    		<span class="badge bg-red"><div data-toggle="modal" data-target="#modal-danger"  class="fa fa-trash" @click="deleteModal= true; selectBookshelves(bookshelves)"></div></span>
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


export default LibraryBookshelvesListTemplate
