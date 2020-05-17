const ShiftListTemplate = `
<div>
	<section class="content-header">
	    		<h1>
	            Shift's List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Shift's List</a></li>
	        </ol>
	</section>

	<!-- Main content -->
	<section class="content">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="box">
	                    <div class="box-header">
	                    	<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" @click="createPage()""><b>&nbsp Add Shifts</b></a> </div>

		                	<!-- editModal-content-start -->

		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b>Edit {{clickedShift.name}} Shift </b></h4>
					              </div>
					              <div class="modal-body">
					                <div class="form-group">
			                            <label class="required-field">Name &nbsp</label>
			                            <input  class="form-control" placeholder="Please enter shift's name" v-model="clickedShift.name" >
		                        	</div>

			                        <div class="form-group">
		                            <label class="required-field">Branch &nbsp</label>
			                            <select class="form-control" v-model="clickedShift.branches_id">
			                            	<option disabled>Select Branch</option>
			                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
			                            </select>
		                    		</div>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-primary" @click="updateShift(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title"><b>{{clickedShift.name}} shift will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="deleteShift()">Yes! Delete!</button>
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
											<tr v-for="(shift,i) in shifts">
		                                        <td>{{i+1}}.</td>
		                                        <td>{{shift.name}}</td>
		                                        <td>{{shift.bName}}</td>
		                                        <td nowarp>
		                                        	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class=" fa fa-pencil"  @click="editModal = true; selectShift(shift)" ></div></span>
		                                    		<span class="badge bg-red"><div data-toggle="modal" data-target="#modal-danger"  class=" fa fa-trash" @click="deleteModal= true; selectShift(shift)"></div></span>
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

`


export default ShiftListTemplate