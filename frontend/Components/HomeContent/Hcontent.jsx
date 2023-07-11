
import './Hcontent.css';

const Hcontent = props => (
    <div class="container">
        <br/><br/>

    <div class="row">
    <div class="col-sm-6">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Features to help your team succeed</h4>
            <p class="card-text">Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with SCAD Project Managment Tool.Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            <a href="#" class="btn btn-primary">More</a><br/><br/><br/>
            <img src="https://i0.wp.com/www.yoroflow.com/wp-content/uploads/2021/08/Key-Features-of-Team-Management-Software-for-Your-Enterprise.jpg?fit=2084%2C1489&ssl=1" class="card-img-top" alt="..."/>
        </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card" style={{width: "18rem;"}}>
        <img src="https://www.flowpot.com/assets/front/image/collage/corporates-management-company.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h4 class="card-title">Boost the productivity of every team in your company</h4>
            <p class="card-text">YouTrack has the flexibility to adapt not just to every team, but to every team member. From personal tasks to company-wide portfolios of projects, YouTrack can handle it all with ease and elegance.</p>
            <a href="#" class="btn btn-primary">More</a><br/><br/><br/>
        </div>
        </div>
    </div>

    </div>

    <br/><br/>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://cdn3.meistertask.com/assets/meister_assets/icons/features/recurring_tasks-81c13ffe84fcec5144491d868eef3a3d01d11c035a747f500e94ca683c8e4433.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Recurring Tasks</h5>
        <p class="card-text">Performing the same task regularly? Don’t start from scratch each time! Instead, set up a template for a recurring task.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://cdn1.meistertask.com/assets/meister_assets/icons/features/automations-a21dafe515e0a04eecc138039097f1f74e9f85f512e050d64516c08c0c222caa.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Automations</h5>
        <p class="card-text">Let MeisterTask save you time — automate repeating steps in your task management workflow to increase efficiency and consistency.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://cdn2.meistertask.com/assets/meister_assets/icons/features/time_tracking-216772cccc476468446a2a246fb9d1c31cf27648f150440aa4309be2c7ea4e98.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Time Tracking</h5>
        <p class="card-text">Keep productivity high and deadlines in sight with our built-in time tracker. Export data to assist with team calculations and projections.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    <br/><br/>
    
    </div>
);

export default Hcontent;