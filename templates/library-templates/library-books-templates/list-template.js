const LibraryBooksListTemplate = `
<div>
	<section class="content-header">
	    		<h1>
	            Book's List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Book's List</a></li>
	        </ol>
	</section>
	<!-- Main content -->
	    <section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" @click="createPage()""><b>&nbsp Add Books</b></a> </div>
	                       
							<!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit {{clickedBook.name}} Book </b></h4>
					              </div>
					              <div class="modal-body">
					                <div class="form-group">
			                            <label class="required-field">Title &nbsp</label>
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
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-primary" @click="updateBook(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title"><b>{{clickedBook.name}} Book will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="deleteBook()">Yes! Delete!</button>
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
	                                    <th scope="col">Branch</th>
	                                    <th scope="col">Action</th>
	                                </tr>
	                                </thead>
	                                <tbody>
											<tr v-for="(book,i) in books">
		                                        <td>{{i+1}}.</td>
		                                        <td>{{book.name}}</td>
		                                        <td>{{book.bName}}</td>
		                                        <td nowarp>
		                                        	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-pencil"  @click="editModal = true; selectBook(book)" ></div></span>
		                                    		<span class="badge bg-red"><div data-toggle="modal" data-target="#modal-danger"  class="fa fa-trash" @click="deleteModal= true; selectBook(book)"></div></span>
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


export default LibraryBooksListTemplate