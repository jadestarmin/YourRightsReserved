import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="space-y-3">
      <Card className="overflow-hidden rounded-2xl">
        <div className="h-20 bg-brand-gray" />
        <CardContent className="p-4">
          {/* Profile picture centered */}
          <div className="flex flex-col items-center -mt-10">
            <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center border-4 border-white flex-shrink-0">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/user-profile-illustration.png" alt="John Smith" />
                <AvatarFallback className="bg-brand-green text-white text-3xl">
                  <Pencil className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
            </div>
            {/* Text positioned below profile picture */}
            <div className="text-center mt-3">
              <h2 className="text-xl font-serif font-bold text-brand-text-dark">John Smith</h2>
              <p className="text-sm text-brand-text-light mt-1">
                PhD Student in Computer Science, Machine Learning expert & Innovator
              </p>
            </div>
          </div>
        </CardContent>
        <div className="border-t border-brand-gray-light p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-badge-blue rounded-lg flex-shrink-0" />
            <div>
              <p className="font-semibold text-xs text-brand-text-dark">Stanford University</p>
              <p className="text-xs text-brand-text-light">Machine Learning Lab • PhD Student</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-badge-red rounded-lg flex-shrink-0" />
            <div>
              <p className="font-semibold text-xs text-brand-text-dark">ML.com</p>
              <p className="text-xs text-brand-text-light">Founder</p>
            </div>
          </div>
        </div>
      </Card>
      <Card className="rounded-2xl">
        <CardContent className="p-3">
          <p className="text-xs font-medium text-brand-text-dark">Good morning, John Smith!</p>
          <div className="flex items-center text-xs text-brand-text-light mt-1">
            <Pencil className="w-3 h-3 mr-2" />
            <span>Start sharing your thoughts...</span>
          </div>
          <div className="mt-3 border-t border-brand-gray-light pt-2 flex justify-between items-center">
            <p className="text-xs text-brand-text-light">
              New profile visitors: <span className="font-bold text-brand-green">280</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
