using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using patient_api.Models;

namespace patient_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("CreateUser")]
        public IActionResult Create(User user)
        {
            if(_context.Users.Where(u=>u.Email == user.Email).FirstOrDefault()!=null)
            {
                return Ok("AlreadyExists");
            }

            user.CreatedOn = DateTime.Now;
            _context.Users.Add(user);
            _context.saveChanges();
            return Ok("success");
        }

        [HttpPost("LoginUser")]
        public IActionResult Login(Login login)
        {
            var userAvailable  = _context.Users.Where(u=>u.Email == User.Email && u.password == User.password).FirstOrDefault();

            if(userAvailable!=null)
            {
                return Ok("success");
            }

            return Ok("Failure");
        }
    }
}
