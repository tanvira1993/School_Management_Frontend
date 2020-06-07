const LibraryIssueBookListTemplate = `
<div>
	<section class="content-header">
	    	<h1>
	            Issued Book's List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Issued Book's List</a></li>
	        </ol>
	</section>
	<!-- Main content -->
	    <section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box" style="border-top-color: #605ca8 !important">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" style="background-color: #605ca8 !important" @click="createPage()""><b>&nbsp Issue Book </b></a> </div>
	                       
							<!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit {{clickedIssuedBook.lbName}} Issued Book </b></h4>
					              </div>
					              <div class="modal-body">
		                            <div class="form-group">
                                		<label class="required-field">Branch &nbsp</label>
                                		<input class="form-control" v-model="clickedIssuedBook.bName" disabled>
                            		</div>
                            		<div class="form-group">
                                		<label class="required-field">Category &nbsp</label>
                                		<input class="form-control" v-model="clickedIssuedBook.lbcName" disabled>
                            		</div>
                            		<div class="form-group">
                                		<label class="required-field">Book &nbsp</label>
                                		<input class="form-control" v-model="clickedIssuedBook.lbName" disabled>
                            		</div>
		                            <div class="form-group" v-if="helpBox" style="text-align: center">
		                        		<span class="label" style="background-color: #605ca8" v-bind:class="{ 'danger-span': dngr }">Available Books:&nbsp {{booksLeft}} </span>
		                        	</div>
		                          
		                            <div class="form-group">
		                                <label class="required-field">Quantity &nbsp</label>
		                                <select class="form-control" v-model="clickedIssuedBook.quantity">
		                                    <option :value="null" disabled selected>Quantity</option>
		                                    <option v-for='index in avlBooks' v-bind:value="index">{{ index }}</option>
		                                </select>
		                            </div>
		                            <div class="form-group">
		                                <label class="required-field">Issued to &nbsp</label>
		                                <select :disabled="users.length == 0" class="form-control" v-model="clickedIssuedBook.users_id">
		                                    <option :value="null" disabled selected>Select User</option>
		                                    <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
		                                </select>
		                            </div>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-primary" style="background-color: #605ca8 !important" @click="updateIssuedBook(); editModal= false;" data-dismiss="modal">Update</button>
					              </div>
					            </div>
					          </div>				          
					        </div>
							<!-- /.editModal-content-end -->
							<!-- deleteModal-content-start -->
							<div class="modal modal-info fade" id="modal-danger" v-if="deleteModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>{{clickedIssuedBook.lbName}} Book will be returned.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b><span class="label">Books Name:&nbsp </span>{{clickedIssuedBook.lbName}} </b></p>
					                <p><b><span class="label">&nbsp&nbsp&nbsp&nbsp Issued-To:&nbsp </span>{{clickedIssuedBook.uName}} </b></p>
					                <p><b><span class="label">Issued-Date:&nbsp </span>{{clickedIssuedBook.issued_date}} </b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="returnIssuedBook()">Yes! Confirm!</button>
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
	                                    <th scope="col">Issued Date</th>
	                                    <th scope="col">Issued To</th>
	                                    <th scope="col">Email</th>
	                                    <th scope="col">Categories</th>
	                                    <th scope="col">Books</th>
	                                    <th scope="col">Quantities</th>
	                                    <th scope="col">Actions</th>
	                                </tr>
	                                </thead>
	                                <tbody>
											<tr v-for="(issuedBook,i) in issuedBooks">
		                                        <td>{{i+1}}.</td>
		                                        <td>{{issuedBook.issued_date}}</td>
		                                        <td>{{issuedBook.uName}}</td>
		                                        <td>{{issuedBook.users_email}}</td>
		                                        <td>{{issuedBook.lbcName}}</td>
		                                        <td>{{issuedBook.lbName}}</td>
		                                        <td>{{issuedBook.quantity}}</td>
		                                        <td nowarp>
		                                        	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-edit"  @click="editModal = true; selectIssuedBook(issuedBook)" ></div></span>
		                                    		<span class="badge" style="background-color: #00a7d0 !important"><div data-toggle="modal" data-target="#modal-danger" @click="deleteModal= true; selectIssuedBook(issuedBook)"> Return &nbsp<i class="fa fa-hand-lizard-o" aria-hidden="true"></i></div></span>
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


export default LibraryIssueBookListTemplate
