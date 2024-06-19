const CircleInitials = ({img}) => {
  return (
      <div 
        className={img ? "d-flex justify-content-center align-items-center shadow rounded-circle my-5 px-4 profile-img-size text-white profile-pic-setting" : "d-flex justify-content-center align-items-center shadow rounded-circle my-5 px-4 profile-img-size text-white profile-initials-gradient"}
        style={ img ? {backgroundImage: `url(data:image/png;base64,${img})`} : {background: 'red'}}
      >
          {!img && <h1 className="mb-0">KS</h1>}
      </div> 
  )
}

export default CircleInitials