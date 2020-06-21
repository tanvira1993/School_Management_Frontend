const NoticeListTemplate = `
<div>

<section class="content-header">
	    	<h1>
	            Notice List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">All Notices</a></li>
	        </ol>
	</section>
	<!-- Main content -->
	    <section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box" style="border-top-color: #605ca8 !important">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" style="background-color: #605ca8 !important" @click="createNotice()""><b>&nbsp Add Notice</b></a> </div>
                           
                            
                            <!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit Notice </b></h4>
					              </div>
					              <div class="modal-body">
                                    
                                    <div class="form-group">
                                        <label class="required-field">Name &nbsp</label>
                                        <input type="text" class="form-control" placeholder="Please enter quantity of book" v-model="clickedItem.name">
                                    </div>

                                    <div class="form-group">
                                        <label class="required-field">Description &nbsp</label>
                                        <input type="text" class="form-control" placeholder="Please enter quantity of book" v-model="clickedItem.description">
                                    </div>

                                    <div class="form-group">
                                        <label class="required-field">File &nbsp</label>
                                        <input type="file" @change="fileChange" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <label class="required-field">Branch &nbsp</label>
                                        <select class="form-control" v-model="clickedItem.branches_id">
                                            <option disabled>Select Branch</option>
                                            <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                        </select>
                                    </div>
   
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-primary" style="background-color: #605ca8 !important" @click="update(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title"><b>Notice will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="removeItem()">Yes! Delete!</button>
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
                                            <th scope="col">Action</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">File</th>
                                            <th scope="col">Branch</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        <tr v-for="(notice,i) in notices">
                                            <td>{{i+1}}.</td>
                                            <td nowarp>
                                                <span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-edit"  @click="editModal = true; clickedItem = notice" ></div></span>
                                                <span class="badge bg-red"><div data-toggle="modal" data-target="#modal-danger"  class="fa fa-trash" @click="deleteModal= true; clickedItem = notice"></div></span>
                                            </td>
                                            <td>{{notice.name}}</td>
                                            <td>{{notice.description}}</td>
                                            <td>{{notice.file}}</td>
                                            <td>{{notice.bName}}</td>
                                            
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

export default NoticeListTemplate