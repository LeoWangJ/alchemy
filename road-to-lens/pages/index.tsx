import {useQuery,gql} from '@apollo/client'
import Profile from '../components/Profile'
import recommendedProfilesQuery from '../queries/recommendedProfilesQuery'

export default function Home() {
  const {loading,error,data} = useQuery(recommendedProfilesQuery)
  if(loading) return `loading`
  if(error) return `Error! ${error.message}`
  return (
    <div>
      {
        data.recommendedProfiles.map((profile) =>{
          return <Profile key={profile.id} profile={profile} displayFullProfile={false} />;
        })
      }
    </div>
  )
}
