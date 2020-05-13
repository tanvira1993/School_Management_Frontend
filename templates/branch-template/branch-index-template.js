const BranchIndexTemplate = `
<div>

    <div v-if="showCreateForm">
        <div class="col-md-3">
        </div>
        <div class="col-md-6">
            <div class="box box-primary">

                <div class="box-header with-border">
                    <h3 class="box-title">Organization</h3>
                </div>

                <div>

                    <div class="box-body">

                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" v-model="branch.title">
                        </div>

                        <div class="form-group">
                            <label for="title">Organization Id</label>
                            <select id="title" class="form-control" v-model="branch.organization_id">
                                <option v-for="(organization,i) in organization" :key="i" :value="organization.id">{{organization.title}}</option>
                            </select>
                        </div>

                    </div>

                    <div class="box-footer">
                        <button class="btn btn-primary" @click.prevent="submit(); showCreateForm=false">Submit</button>
                    </div>

                </div>
                
            </div>

        </div>

        
    </div>




    <div v-if="showEditForm">
        <div class="col-md-3">
        </div>
        <div class="col-md-6">
            <div class="box box-primary">

                <div class="box-header with-border">
                    <h3 class="box-title">Organization</h3>
                </div>

                <div>

                    <div class="box-body">

                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" v-model="clickedBranch.title">
                        </div>

                        <div class="form-group">
                            <label for="title">Organization Id</label>
                            <select id="title" class="form-control" v-model="clickedBranch.organization_id">
                                <option v-for="(organization,i) in organization" :key="i" :value="organization.id">{{organization.title}}</option>
                            </select>
                        </div>

                    </div>

                    <div class="box-footer">
                        <button class="btn btn-primary" @click.prevent="update(clickedBranch.id); showEditForm = false">Submit</button>
                    </div>

                </div>
                
            </div>

        </div>

        
    </div>






    <div class="container">
        
        <h1 class="fleft col">List of Branches</h1>

        <button class="fright addNew btn btn-primary" @click.prevent="showCreateForm = true">Add New</button>

        <div class="clear"></div>
        <hr>
        
        <table class="list">
            <tr>
                <th>SL</th>
                <th>Action</th>
                <th>Title</th>
                
            </tr>

            <tr v-for="(branch, i) in branches" :key="i">
                <td>{{i+1}}</td>
                <td>
                    <button class="btn btn-danger fa fa-trash" @click.prevent="deleteBranch(branch.id)"></button>
                    <button class="btn btn-primary fa fa-edit" @click.prevent="showEditForm = true; clickedBranch = branch"></button>
                </td>
                <td>{{branch.title}}</td>
			</tr>

        </table>
    </div>

    
			

</div>
`

export default BranchIndexTemplate