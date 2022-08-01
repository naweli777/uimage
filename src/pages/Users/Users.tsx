import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";
import "./Users.css"

const Users = () => {
  const data = useFetch({
    url: "https://api.unsplash.com/photos/?client_id=jYkz9f32UjCvqr6Lp7mNZ1KIXNZpq6L1IGTRlrMGFdg",
    init: {},
  });
  //   @ts-ignore
  console.log({ data: data});
  return (
    <>
    <div className="search_field">
    <input type="search"/>
    </div>
           

      <div className="user-container">

        {data &&
          data.map((item:any,idx: any) => (
            <Card key={idx} 
              name={item?.user?.first_name}
              username={item?.user?.instagram_username}

              bio={item?.user?.bio}
              img={item?.user?.profile_image.large}
              total_likes={item?.user?.total_likes}
              total_photos={item?.user?.total_photos}
            />
          ))}
      </div>
    </>
  );
};

export default Users;
