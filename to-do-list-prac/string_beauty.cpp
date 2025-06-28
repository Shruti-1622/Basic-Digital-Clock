#include<iostream>
#include<bits/stdc++.h>
using namespace std;
    int beautySum(string s) {
        int sum=0, temp=0;
        for(int i=0;i<s.length();i++){
             string str="";
             int maxfreq= -1, minfreq=INT_MAX;
            
            for(int j=i;j<s.length();j++){
                int len=j-i+1;
                str+=s[j];
                cout<<str<<" "<<endl;
                if(len==1) continue; //len wale ki 0 beauty
               
                vector<int> freq(26,0);
                for(char ch: str){
                    freq[ch-'a']++;
                }

                for(auto it: freq){
                    if(it !=0)
                    {maxfreq=max(maxfreq, it);
                    minfreq=min(minfreq, it);}
                }
               
                 sum+=maxfreq-minfreq;

                
            }
          
            
            

        }
        return sum;
    }
    int main(){
        cout<< beautySum("aabcb");

    }
