const BranchIndexTemplate = `
<div>

<div>
	<section class="content-header">
	    		<h1>
	            Branches List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">Branches List</a></li>
	        </ol>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">

                    <div style="text-align: center;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add Branch</a> </div>





                    <!-- createModal-content-start -->

                    <div class="modal fade" id="modal-default-create" v-if="createModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                        
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title"><b>Add Branch</b></h4>
                                </div>
                            
                                <div class="modal-body">
                                
                                    <div class="form-group">
                                        <label class="required-field">Title &nbsp</label>
                                        <input  class="form-control" placeholder="Please enter branch's name" v-model="newBranch.name">
                                    </div>

                                    <div class="form-group">
                                        <label class="required-field">Branch &nbsp</label>
                                        <select class="form-control" v-model="newBranch.organization_id">
                                            <option disabled selected >Select Branch</option>
                                            <option v-for="organization in organizations" v-bind:value="organization.id">{{ organization.name }}</option>
                                        </select>
                                    </div>
                                
                                </div>
                            
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal" @click="createModal= false">Close</button>
                                    <button type="button" class="btn btn-primary" @click="submitBranch() ; createModal= false;" data-dismiss="modal">Submit</button>
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
                                    <h4 class="modal-title"><b>Edit Branch</b></h4>
                                </div>

                                <div class="modal-body">
                                    <div class="form-group">
                                        <label class="required-field">Title &nbsp</label>
                                        <input  class="form-control" placeholder="Please enter book's name" v-model="clickedBranch.name">
                                    </div>

                                    <div>
                                        <label class="required-field">Branch &nbsp</label>
                                        <select class="form-control" v-model="clickedBranch.organization_id">
                                            <option disabled selected >Select Branch</option>
                                            <option v-for="organization in organizations" v-bind:value="organization.id">{{ organization.name }}</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal" @click= "editModal = false">Close</button>
                                    <button type="button" class="btn btn-primary" @click="updateBranch(); editModal= false;" data-dismiss="modal">Update</button>
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
                                    <h4 class="modal-title"><b>Branch will be deleted.</b></h4>
                                </div>
                                
                                <div class="modal-body">
                                    <p><b>Are you Sure??</b></p>
                                </div>
                                
                                <div class="modal-footer">
                                <button type="button" class="btn btn-outline pull-left" data-dismiss="modal" @click="deleteModal = false">Close</button>
                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="deleteBranch()">Yes! Delete!</button>
                                </div>
                            </div>
                                    
                        </div>
                                
                    </div>

                    <!-- /.deleteModal-content-end -->
                    





                    <!-- /.data table -->

                    <div class="box-body table-responsive no-padding">

                        <div class="col-xs-12">
            
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Branches table</h3>
                                </div>

                                <div class="box-body">
                                <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 225px;">SL NO</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 282px;">Action</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Title</th>
                                            
                                        </tr>

                                    </thead>
                                    
                                    <tbody>
                                        
                    
                                        <tr role="row" class="odd" v-for="(branch, index) in branches" v-bind:key="index">
                                            <td>{{index+1}}</td>
                                            <td class="sorting_1">
                                                <a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal = true; clickedBranch = branch"></a>
                                                <a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal = true; clickedBranch = branch"></a>
                                            </td>
                                            <td>{{branch.name}}</td>
                                        </tr>
                                    </tbody>
                                    
                                </table></div></div></div>
                                </div>
                                <!-- /.box-body -->
                            </div>
                        <!-- /.box -->
                    </div>
	              </div>
                
                
                
                </div>
            </div>
        </div>
    
    </section>      



</div>

</div>
`

export default BranchIndexTemplate