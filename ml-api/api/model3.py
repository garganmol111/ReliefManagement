import pandas as pd 
import pickle as p 
import dill

def extracter(file_name):
    data=pd.read_csv(file_name)
    T=data.values.tolist()
    T1=[]
    for row in T: 
        T1.append([row[0],row[1],row[2],row[3]])
    return T1


def class_counts(data):
    counts={}
    for row in data:
        label = row[-1]
        if label not in counts:
            counts[label]=0
        counts[label] += 1
    return counts 


def unique_vals(data,col):
    return set([row[col] for row in data])

header=['Inventory','Distance','PeopleAffected']

class Question:
    def __init__(self,column,value):
        self.column = column
        self.value = value
    def match(self,example):
        val = example[self.column]
        return val == self.value
    def __repr__(self):
        return "is %s %s %s ?" %(header[self.column],"==",str(self.value))


def partition(data, question):
    true_rows,false_rows= [],[]
    for row in data:
        if(question.match(row)):
            true_rows.append(row)
        else:
            false_rows.append(row)
    return true_rows,false_rows


def gini(data):
    counts = class_counts(data)
    impurity = 1
    for lbl in counts:
        prob_of_lbl = counts[lbl]/float(len(data))
        impurity-=prob_of_lbl**2
    return impurity


def info_gain(left,right,current_uncertainty):
    p = float(len(left))/(len(left)+len(right))
    return current_uncertainty - p*gini(left) - (1-p)*gini(right)


def find_best_split(data):
    best_gain=0
    best_question =None
    current_impurity=gini(data)
    n_features=len(data[0])-1
    for col in range(n_features):
        values=unique_vals(data,col)
        for val in values:
            question = Question(col,val)
            true_rows,false_rows=partition(data,question)
            if(len(true_rows)==0 or len(false_rows)==0):
                continue
            gain=info_gain(true_rows,false_rows,current_impurity)
            if gain>=best_gain:
                best_gain,best_question=gain,question
    return best_gain,best_question


class Leaf:
    def __init__(self,data):
        self.predictions=class_counts(data)


class Decision_Node:
    def __init__(self,question, true_branch,false_branch):
        self.question=question
        self.true_branch=true_branch
        self.false_branch=false_branch
    def PredictNew(self,data):
        test1=[]
        A1=LMH(data[0]/1)
        A2=LMH(data[1]/1)
        A3=LMH(300/1)
        test1.append([A1,A2,A3])

        for row in test1:
            print(("Predicted: %s" % (print_leaf(classify(row, self)))))



def build_tree(data,i=0):
    gain,question=find_best_split(data)
    
    if gain == 0:
        return Leaf(data)
    true_rows,false_rows=partition(data,question)
    true_branch=build_tree(true_rows,i)
    false_branch=build_tree(false_rows,i)
    return Decision_Node(question,true_branch,false_branch)


def print_tree(node,spacing=""):
    if isinstance(node,Leaf):
        print((spacing+"predict",node.predictions))
        return
    print((spacing+str(node.question)))
    print((spacing+"--> True:"))
    print_tree(node.true_branch, spacing+"   ")
    print((spacing+"--> False:"))
    print_tree(node.false_branch, spacing+"   ")


def print_leaf(counts):
    total = sum(counts.values())*1.0
    probs={}
    for lbl in list(counts.keys()):
        probs[lbl]=(int(counts[lbl]/total*100))#+"%"
    return probs
    

def classify(row,node):
    if isinstance(node,Leaf):
        return node.predictions
    if node.question.match(row):
#        print(node.question)
#       print(node.question.match(row))
        return classify(row,node.true_branch)
    else:
#        print(node.question)
#        print(node.question.match(row))
        return classify(row,node.false_branch)


def checkKey(dict, key): 
    
    if key in list(dict.keys()): 
        return dict[key] 
    else: 
        return 0


def Predict(test,node):
    Acc=0
    Tru=0
    for row in test:
        print(("Actual: %s. Predicted: %s" %
        (row[-1], print_leaf(classify(row, node)))))
        X=print_leaf(classify(row, node))
        Y=row[-1]
        Acc+=checkKey(X,Y)
        Tru+=100
    return Acc/(Tru)



def LMH(num):
    if(num<50):
        return "low"
    if(num<500):
        return "mid"
    else:
        return "high"


def Train_Predict():
    Training_data=extracter("datatest.csv")
    
    my_tree=build_tree(Training_data)
#    print_tree(my_tree)
    # A=int(input("enter inventory in km: "))
    # B=int(input("enter distance: "))
    # # C=int(input("enter people affected:"))
    # test1=[]
    # A1=LMH(A/1)
    # A2=LMH(B/1)
    # A3=LMH(C/1)
    # test1.append([A1,A2,A3])
    # PredictNew(my_tree,test1)
    return my_tree

my_tree=Train_Predict()

dbfile = open('final_pred.pickle', 'ab') 
      
     
p.dump(my_tree, dbfile)                      
dbfile.close() 


dill.dump_session('dill.pkl')

#my_tree.PredictNew([1000,10])